export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    reddit?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Transport Fever 3 Wiki",
  shortName: "TF3 Wiki",
  logoText: "TF",
  tagline: "Vehicles, Guides, Mods & Transport Networks",
  description: "Your ultimate Transport Fever 3 wiki! Explore vehicle lists, beginner guides, industries, transport networks, campaigns, maps, mods, and gameplay tips for the ultimate transport tycoon.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://transport-fever-3.top",
  supportEmail: "support@transport-fever-3.top",
  gameUrl: "https://store.steampowered.com/app/3493540/Transport_Fever_3/",
  heroVideoId: "HcI60a6PbdI", // Transport Fever 3 - Cinematic Announcement Trailer (official)
  social: {
    discord: "https://discord.com/game/transport-fever-460542812124086272",
    youtube: "https://www.youtube.com/@TransportFeverGame",
    reddit: "https://www.reddit.com/r/TransportFever3/",
  },
  locales: ["en", "de", "fr", "ja"],
  defaultLocale: "en",
};
