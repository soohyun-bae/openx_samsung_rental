const DEFAULT_LANDING_PAGE_ID = 2;

/** Returns the landing page id used by the shared admin form API. */
export const getLandingPageId = () => {
  const value = Number(import.meta.env.VITE_LANDING_PAGE_ID);

  return Number.isInteger(value) && value > 0 ? value : DEFAULT_LANDING_PAGE_ID;
};

/** Captures lightweight source metadata so admins know where the lead came from. */
export const getCurrentPageSource = () => {
  if (typeof window === "undefined") {
    return {
      host: "",
      url: "",
    };
  }

  return {
    host: window.location.host,
    url: window.location.href,
  };
};
