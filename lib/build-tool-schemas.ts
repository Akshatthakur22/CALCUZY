import {
  createBreadcrumbSchema,
  createCalculateActionSchema,
  createFAQSchema,
  createHowToSchema,
  createToolSchema,
  ToolSchemaConfig,
} from './metadata'

export type ToolHowToStep = { title: string; description: string }

export type BuildToolPageSchemasOptions = {
  tool: ToolSchemaConfig
  breadcrumbItems?: { name: string; url: string }[]
  faqs?: { question: string; answer: string }[]
  howToSteps: ToolHowToStep[]
  howTo: { name: string; description: string }
  calculateAction: {
    name: string
    description: string
    inputType?: string
    outputType?: string
  }
}

export function buildToolPageSchemas({
  tool,
  breadcrumbItems,
  faqs,
  howToSteps,
  howTo,
  calculateAction,
}: BuildToolPageSchemasOptions): object[] {
  const schemas: object[] = [createToolSchema(tool)]

  if (breadcrumbItems?.length) {
    schemas.unshift(createBreadcrumbSchema(breadcrumbItems))
  }

  if (faqs?.length) {
    schemas.push(createFAQSchema(faqs))
  }

  schemas.push(
    createCalculateActionSchema({
      name: calculateAction.name,
      description: calculateAction.description,
      url: tool.url,
      inputType: calculateAction.inputType,
      outputType: calculateAction.outputType,
    }),
    createHowToSchema({
      name: howTo.name,
      description: howTo.description,
      url: tool.url,
      steps: howToSteps,
    })
  )

  return schemas
}
