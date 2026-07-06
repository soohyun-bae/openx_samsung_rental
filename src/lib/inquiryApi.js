import { fetchFormConfigFields } from "./formConfigApi";
import { buildInquiryFormData } from "./inquiryFormData";
import { getLandingPageId } from "./landingPage";

const DEFAULT_FORM_SUBMISSIONS_ENDPOINT = "/api/form-submissions";

const getFormSubmissionsEndpoint = () => {
  return (
    import.meta.env.VITE_FORM_SUBMISSIONS_ENDPOINT?.trim() ||
    DEFAULT_FORM_SUBMISSIONS_ENDPOINT
  );
};

const normalizeInquiry = ({ name, phone, agree }) => {
  const trimmedName = name.trim();
  const trimmedPhone = phone.trim();

  if (!trimmedName || !trimmedPhone) {
    throw new Error("이름과 전화번호를 입력해주세요.");
  }

  if (!agree) {
    throw new Error("개인정보 수집에 동의해주세요.");
  }

  return {
    name: trimmedName,
    phone: trimmedPhone,
  };
};

/** Submits footer inquiries through the deployed admin API instead of direct Supabase writes. */
export const submitInquiry = async (values) => {
  const inquiry = normalizeInquiry(values);
  const fields = await fetchFormConfigFields().catch((error) => {
    console.warn(
      "Failed to fetch form_config fields. Submitting fallback data.",
      error,
    );
    return [];
  });

  const response = await fetch(getFormSubmissionsEndpoint(), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      landing_page_id: getLandingPageId(),
      form_data: buildInquiryFormData(inquiry, fields),
    }),
  });

  const result = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(result?.message || "상담 신청에 실패했습니다.");
  }

  return result;
};
