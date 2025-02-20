import { useState } from 'react';

export default function useContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  // Web3FormsのAPIキーを直接設定
  const WEB3FORMS_API_KEY = 'a5f8fb4d-4755-4e09-93ed-8976e949bb1f';

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // イベントの型を具体的に指定
  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Web3Formsへの送信データを作成
      const data = {
        access_key: WEB3FORMS_API_KEY,
        ...formData,
      };

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`フォームの送信に失敗しました: ${response.statusText}`);
      }

      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error: any) {
      setError(error.message || 'エラーが発生しました');
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    success,
    error,
    loading,
    handleChange,
    handleSubmit,
  };
}