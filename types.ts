
export type Page = 'home' | 'abasimples' | 'psiway' | 'neurorastreio' | 'psicopei' | 'psiform-forms' | 'psicopedagohub' | 'white-paper';

export interface ProductInfo {
  id: Page;
  name: string;
  category: 'CORE' | 'ESSENTIAL';
  description: string;
  cta: string;
}
