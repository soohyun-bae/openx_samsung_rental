import { getLandingPageId } from "./landingPage";

const DEFAULT_FORM_CONFIG_ENDPOINT = "/api/form-config";

let cachedFormConfigPromise = null;

const getFormConfigEndpoint = () => {
  return (
    import.meta.env.VITE_FORM_CONFIG_ENDPOINT?.trim() ||
    DEFAULT_FORM_CONFIG_ENDPOINT
  );
};

const isFormConfigField = (field) => {
  return field && typeof field === "object" && typeof field.name === "string";
};

const normalizeFormConfig = (result) => {
  if (!Array.isArray(result?.fields)) {
    return [];
  }

  return result.fields.filter(isFormConfigField);
};

/** Fetches the latest admin-managed form_config fields for this landing page. */
export const fetchFormConfigFields = async () => {
  if (cachedFormConfigPromise) {
    return cachedFormConfigPromise;
  }

  const endpoint = new URL(getFormConfigEndpoint(), window.location.origin);
  endpoint.searchParams.set("landing_page_id", String(getLandingPageId()));

  cachedFormConfigPromise = fetch(endpoint.toString())
    .then(async (response) => {
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result?.message || "폼 설정을 불러오지 못했습니다.");
      }

      return normalizeFormConfig(result);
    })
    .catch((error) => {
      cachedFormConfigPromise = null;
      throw error;
    });

  return cachedFormConfigPromise;
};
