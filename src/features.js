const featureFlags = {
  clearSearchHistory: false,
  managePatterns: true,
  centeringModes: false,
  // keyboardShortcuts: false, // NOT SUPPORTED IN BLUEPRINT YET (FUNCTION COMPONENT)
};

export const isFeatureEnabled = (name) => featureFlags[name];
export const setFeature = (name, status) => (featureFlags[name] = status);
export const getAll = () => featureFlags;
