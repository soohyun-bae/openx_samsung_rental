import { useEffect, useState } from "react";
import { hasSupabaseConfig, supabase } from "../lib/supabaseClient";

export const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const redirectIfLoggedIn = async () => {
      if (!hasSupabaseConfig) return;

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        window.location.href = "/admin";
      }
    };

    redirectIfLoggedIn();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!hasSupabaseConfig) {
      setErrorMessage("Supabase 환경변수가 없습니다.");
      return;
    }

    setSubmitting(true);
    setErrorMessage("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMessage(error.message);
      setSubmitting(false);
      return;
    }

    window.location.href = "/admin";
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f5f7fb] px-5 py-10 text-[#1a1a1a]">
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-[420px] flex-col gap-5 rounded-[8px] border border-[#e3e8f2] bg-white p-6 shadow-[0_8px_24px_rgba(13,27,62,0.06)]"
      >
        <div>
          <p className="text-sm font-semibold text-[#014AFF]">ADMIN</p>
          <h1 className="mt-2 text-[30px] leading-tight text-[#0D1B3E]">
            로그인
          </h1>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-semibold">
            이메일
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="rounded-[8px] border border-[#d9deea] px-4 py-3 outline-none focus:border-[#014AFF]"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-sm font-semibold">
            비밀번호
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="rounded-[8px] border border-[#d9deea] px-4 py-3 outline-none focus:border-[#014AFF]"
            required
          />
        </div>

        {errorMessage && (
          <p className="rounded-[8px] bg-[#fff2f2] px-4 py-3 text-sm font-semibold text-[#d93b3b]">
            {errorMessage}
          </p>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="rounded-[8px] bg-[#014AFF] px-4 py-3 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitting ? "로그인 중" : "로그인"}
        </button>
      </form>
    </main>
  );
};

