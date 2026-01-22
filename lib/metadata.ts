export function createMetadata({
  title,
  description,
  keywords = "",
  url = "",
  image = "/og-default.png",
}: {
  title: string;
  description: string;
  keywords?: string;
  url?: string;
  image?: string;
}) {
  return {
    title,
    description,
    keywords,

    metadataBase: new URL("https://calcuzy.app"),

    alternates: {
      canonical: url,
    },

    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
      },
    },

    openGraph: {
      title,
      description,
      url,
      siteName: "Calcuzy",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
