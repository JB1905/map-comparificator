const featureFlags = {
  clearSearchHistory: false,
  managePatterns: false,
  centeringModes: false,
  keyboardShortcuts: false,
};

export const isFeatureEnabled = (name) => featureFlags[name];
export const setFeature = (name, status) => (featureFlags[name] = status);
export const getAll = () => featureFlags;
