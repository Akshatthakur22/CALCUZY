interface BlogGuideJsonLdProps {
  schemas: object[]
}

export default function BlogGuideJsonLd({ schemas }: BlogGuideJsonLdProps) {
  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
