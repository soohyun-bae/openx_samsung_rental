import { useEffect, useMemo, useState } from "react";
import { hasSupabaseConfig, supabase } from "../lib/supabaseClient";

const goToLogin = () => {
  window.location.href = "/admin/login";
};

const formatDate = (value) => {
  if (!value) return "-";

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return String(value);

  return new Intl.DateTimeFormat("ko-KR", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
};

const formatValue = (value) => {
  if (value === null || value === undefined || value === "") return "-";
  if (Array.isArray(value)) return value.join(", ");
  if (typeof value === "object") return JSON.stringify(value);
  return String(value);
};

export const Admin = () => {
  const [admin, setAdmin] = useState(null);
  const [landingPages, setLandingPages] = useState([]);
  const [activeLandingId, setActiveLandingId] = useState(null);
  const [submissions, setSubmissions] = useState([]);
  const [configs, setConfigs] = useState({});
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const activeFields = useMemo(() => {
    return configs[activeLandingId] || [];
  }, [activeLandingId, configs]);

  const filteredSubmissions = useMemo(() => {
    return submissions.filter(
      (submission) => submission.landing_page_id === activeLandingId,
    );
  }, [activeLandingId, submissions]);

  useEffect(() => {
    const init = async () => {
      if (!hasSupabaseConfig) {
        setErrorMessage("Supabase 환경변수가 없습니다.");
        setLoading(false);
        return;
      }

      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) {
        goToLogin();
        return;
      }

      const { data: adminData, error: adminError } = await supabase
        .from("admins")
        .select("*")
        .eq("auth_user_id", user.id)
        .single();

      if (adminError || !adminData) {
        setErrorMessage("관리자 정보를 찾을 수 없습니다.");
        setLoading(false);
        return;
      }

      const { data: landingData, error: landingError } = await supabase
        .from("landing_admins")
        .select(
          `
          landing_page_id,
          landing_pages (
            id,
            page_name
          )
        `,
        )
        .eq("admin_id", adminData.id);

      if (landingError) {
        setErrorMessage(landingError.message);
        setLoading(false);
        return;
      }

      const formattedLandingPages = (landingData || []).map((item) => ({
        landing_page_id: item.landing_page_id,
        landing_pages: Array.isArray(item.landing_pages)
          ? (item.landing_pages[0] ?? null)
          : (item.landing_pages ?? null),
      }));

      const landingIds = formattedLandingPages.map(
        (item) => item.landing_page_id,
      );

      if (landingIds.length === 0) {
        setAdmin(adminData);
        setLandingPages([]);
        setSubmissions([]);
        setConfigs({});
        setLoading(false);
        return;
      }

      const [submissionResult, configResult] = await Promise.all([
        supabase
          .from("form_submissions")
          .select("*")
          .in("landing_page_id", landingIds)
          .order("created_at", { ascending: false }),
        supabase
          .from("form_config")
          .select("landing_page_id, fields")
          .in("landing_page_id", landingIds)
          .order("created_at", { ascending: false }),
      ]);

      if (submissionResult.error) {
        setErrorMessage(submissionResult.error.message);
        setLoading(false);
        return;
      }

      if (configResult.error) {
        setErrorMessage(configResult.error.message);
        setLoading(false);
        return;
      }

      const nextConfigs = {};

      (configResult.data || []).forEach((config) => {
        if (!nextConfigs[config.landing_page_id]) {
          nextConfigs[config.landing_page_id] = Array.isArray(config.fields)
            ? config.fields
            : [];
        }
      });

      setAdmin(adminData);
      setLandingPages(formattedLandingPages);
      setActiveLandingId(landingIds[0]);
      setSubmissions(submissionResult.data || []);
      setConfigs(nextConfigs);
      setLoading(false);
    };

    init();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/admin/login";
  };

  return (
    <main className="min-h-screen bg-[#f5f7fb] px-5 py-8 text-[#1a1a1a] lg:px-10">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-6">
        <header className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold text-[#014AFF]">ADMIN</p>
            <h1 className="mt-2 text-[32px] leading-tight text-[#0D1B3E]">
              문의 DB
            </h1>
            <p className="mt-2 text-sm text-[#747474]">
              {admin?.name ? `${admin.name} 관리자 계정` : "관리자 확인 중"}
            </p>
          </div>
          <div className="flex gap-2">
            <a
              href="/"
              className="rounded-[8px] border border-[#d9deea] bg-white px-4 py-2 text-sm font-semibold text-[#0D1B3E]"
            >
              사이트로 돌아가기
            </a>
            <button
              type="button"
              onClick={handleLogout}
              className="rounded-[8px] bg-[#0D1B3E] px-4 py-2 text-sm font-semibold text-white"
            >
              로그아웃
            </button>
          </div>
        </header>

        {landingPages.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {landingPages.map((item) => (
              <button
                key={item.landing_page_id}
                type="button"
                onClick={() => setActiveLandingId(item.landing_page_id)}
                className={`rounded-[8px] px-4 py-2 text-sm font-semibold ${
                  activeLandingId === item.landing_page_id
                    ? "bg-[#014AFF] text-white"
                    : "border border-[#d9deea] bg-white text-[#0D1B3E]"
                }`}
              >
                {item.landing_pages?.page_name || item.landing_page_id}
              </button>
            ))}
          </div>
        )}

        <section className="overflow-hidden rounded-[8px] border border-[#e3e8f2] bg-white shadow-[0_8px_24px_rgba(13,27,62,0.06)]">
          {loading && (
            <div className="px-6 py-16 text-center text-[#747474]">
              문의 목록을 불러오는 중입니다.
            </div>
          )}

          {!loading && errorMessage && (
            <div className="px-6 py-16 text-center">
              <p className="font-semibold text-[#d93b3b]">
                관리자 화면을 불러오지 못했습니다.
              </p>
              <p className="mt-2 text-sm text-[#747474]">{errorMessage}</p>
            </div>
          )}

          {!loading && !errorMessage && landingPages.length === 0 && (
            <div className="px-6 py-16 text-center text-[#747474]">
              담당 랜딩 페이지가 없습니다.
            </div>
          )}

          {!loading &&
            !errorMessage &&
            landingPages.length > 0 &&
            filteredSubmissions.length === 0 && (
              <div className="px-6 py-16 text-center text-[#747474]">
                아직 저장된 문의가 없습니다.
              </div>
            )}

          {!loading && !errorMessage && filteredSubmissions.length > 0 && (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px] border-collapse text-left text-sm">
                <thead className="bg-[#f1f4fa] text-[#424242]">
                  <tr>
                    <th className="border-b border-[#e3e8f2] px-4 py-3 font-semibold">
                      접수일
                    </th>
                    {activeFields.map((field) => (
                      <th
                        key={field.name}
                        className="border-b border-[#e3e8f2] px-4 py-3 font-semibold"
                      >
                        {field.label || field.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filteredSubmissions.map((submission) => (
                    <tr
                      key={submission.id}
                      className="border-b border-[#eef1f6] last:border-b-0"
                    >
                      <td className="px-4 py-3 align-top">
                        {formatDate(submission.created_at)}
                      </td>
                      {activeFields.map((field) => (
                        <td key={field.name} className="px-4 py-3 align-top">
                          {formatValue(submission.form_data?.[field.name])}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

