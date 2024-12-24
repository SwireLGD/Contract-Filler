import { IFeatureTranslation, TLanguage } from "./types";

const allLanguages: IFeatureTranslation[] = [
    {
        name: 'Survey',
        data: [
            {
                name: 'surveyTitle',
                translation: {
                    ru: 'Типовая форма анкеты физического лица',
                    kg: 'Жеке адамдын анкетасынын стандарттык формасы',
                },
            },
            {
                name: 'surveyTypes',
                translation: {
                    ru: 'Вид анкеты (нужное подчеркнуть)',
                    kg: 'Анкетанын түрү (зарылдыгына жараша астын сызыңыз)',
                },
            },
            {
                name: 'initialType',
                translation: {
                    ru: 'Первичная анкета',
                    kg: 'Негизги анкета',
                },
            },
            {
                name: 'updatedType',
                translation: {
                    ru: 'Обновленная анкета',
                    kg: 'Жаңыланган анкета',
                },
            },
            {
                name: 'identificationInfo',
                translation: {
                    ru: 'Идентификационные сведения',
                    kg: 'Идентификациялык маалымат',
                },
            },
            {
                name: 'status',
                translation: {
                    ru: 'Статус (нужное подчеркнуть)',
                    kg: 'Статус (тиешелүү түрдө астын сызыңыз)',
                },
            },
            {
                name: 'nonResident',
                translation: {
                    ru: 'не резидент',
                    kg: 'резидент эмес',
                },
            },
        ],
    },
];

export const returnTranslation = (name: string, key: TLanguage) => {
    const targetFeature = allLanguages.filter((item) => item.name === name);
    const targetTranslation = targetFeature[0].data.map((item) => {
      return {
        name: item.name,
        translation: item.translation[key] ?? item.translation.kg,
      };
    });
  
    const translation: Record<string, string> = targetTranslation.reduce((object, value) => {
      return { ...object, [value.name]: value.translation };
    }, {});
  
    return translation;
};