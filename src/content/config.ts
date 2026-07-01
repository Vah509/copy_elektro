import { defineCollection, z } from 'astro:content';
import { TYPE_LABELS, TAG_LABELS, PROPERTY_LABELS } from '../data/tags-registry';

const validTypes      = Object.keys(TYPE_LABELS)      as [string, ...string[]];
const validTags       = Object.keys(TAG_LABELS)       as [string, ...string[]];
const validProperties = Object.keys(PROPERTY_LABELS)  as [string, ...string[]];

const vykonaniRoboty = defineCollection({
  type: 'content',
  schema: z.object({
    title:       z.string(),
    date:        z.date(),
    types:       z.array(z.enum(validTypes)).min(1),
    tags:        z.array(z.enum(validTags)).default([]),
    properties:  z.array(z.enum(validProperties)).default([]),
    description: z.string(),
    specs:       z.array(z.object({ label: z.string(), value: z.string() })).default([]),
    brands:      z.array(z.string()).default([]),
    photos:      z.array(z.object({ src: z.string(), caption: z.string() })).min(1),
    seoTitle:    z.string().optional(),
  }),
});

export const collections = { 'vykonani-roboty': vykonaniRoboty };
