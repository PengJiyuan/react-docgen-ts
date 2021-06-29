export type TagType = {
  name?: string;
  value?: string;
};

export type SchemaType = {
  name?: string;
  type?: string;
  description?: string;
  tags?: TagType[];
} | undefined;

export type defaultTypeMapT = Record<string, { type: string, tags?: TagType[] }>;

export type GenerateConfig = {
  defaultTypeMap?: defaultTypeMapT;
}

export type GenerateMarkdownConfig = GenerateConfig & {
  lang?: string;
};