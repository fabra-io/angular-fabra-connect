declare global {
  interface Window {
    fabra: FabraConnect;
  }
}

export interface FabraConnectOptions {
  customTheme?: CustomTheme;
  containerID?: string;
  supportEmail?: string;
  docsLink?: string;
}

export interface CustomTheme {
  colors?: {
    primary?: {
      base?: string; // Primary theme color
      hover?: string; // Color when hovering over primary buttons
      text?: string; // Text color on top of the primary color
    };
  };
}

export interface FabraConnect {
  initialize: (options?: FabraConnectOptions) => Promise<void>;
  open: (linkToken: string) => void;
  close: () => void;
  reattach: (containerID: string) => void;
  destroy: () => void;
}

export type UseFabraConnectResponse = {
  open: (linkToken: string) => void;
  close: () => void;
  reattach: (containerID: string) => void;
  destroy: () => void;
};
