import { openai } from './openai';

type Options = {
  purpose: string;
};

export const getPlaceholderWord = async ({ purpose }: Options) => {
  const res = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content: `あなたは Web 技術や Web アクセシビリティに詳しい機械です。
単語を生成するために動作するため、文章を話さず、常に単語のみを出力します`,
      },
      {
        role: 'user',
        content: `# タスク
ある Web のフォーム内の「${purpose}」のフィールドの placeholder として適切な文字列を考え、出力してください。
ただし、placeholder は入力内容を例示する目的で使用するため、例えば生年月日のフィールドに対して "生年月日" など、フィールドを説明するような単語は不適切です。
逆に、生年月日のフィールドに対しては "1980-03-20" のような単語を出力してください。
形式は以下に従うこと。
「単語」
`,
      },
    ],
  });

  const output = res.data.choices[0].message?.content;
  const trimmed = output?.replaceAll(/「|」/g, '');

  return trimmed;
};
