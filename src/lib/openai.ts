import { OPENAI_SECRET } from '@/const/env';
import { OpenAIApi, Configuration } from 'openai';

export const openai = new OpenAIApi(
  new Configuration({
    apiKey: OPENAI_SECRET,
  })
);
