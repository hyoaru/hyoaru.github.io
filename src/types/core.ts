export type Project = {
  title: string
  image: string
  description: string
  repositoryURL: string
  liveURL: string | null
  processURL: string | null
  tags: string[]
  year: number
}

export type Certification = {
  title: string
  tags: string[]
  imageShrinked: string
  imageOriginal: string
}

export type FieldInterest = {
  name: string
  bits: string[]
  former?: boolean
}

export type Social = {
  name: string
  label: string
  link: string
}

export type Technology = {
  name: string
  logo: string
}
