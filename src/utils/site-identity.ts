/** Resolved media reference from getSiteSettings() */
export interface MediaReference {
	mediaId: string;
	alt?: string;
	url?: string;
}

export interface BlogSiteIdentitySettings {
	title?: string;
	tagline?: string;
	logo?: MediaReference;
	favicon?: MediaReference;
}

const DEFAULT_SITE_TITLE = "webgae";
const DEFAULT_SITE_TAGLINE = "Agencia de desarrollo web para marcas que quieren crecer.";
const LEGACY_SITE_TITLE = "My Blog";
const LEGACY_SITE_TAGLINE = "Thoughts on building for the web";

export function resolveBlogSiteIdentity(settings?: BlogSiteIdentitySettings) {
	const rawTitle = settings?.title?.trim();
	const rawTagline = settings?.tagline?.trim();

	return {
		siteTitle:
			!rawTitle || rawTitle === LEGACY_SITE_TITLE
				? DEFAULT_SITE_TITLE
				: rawTitle,
		siteTagline:
			!rawTagline || rawTagline === LEGACY_SITE_TAGLINE
				? DEFAULT_SITE_TAGLINE
				: rawTagline,
		siteLogo: settings?.logo?.url ? settings.logo : null,
		siteFavicon: settings?.favicon?.url ?? null,
	};
}
