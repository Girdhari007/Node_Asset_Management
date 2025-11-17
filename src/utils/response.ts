export const success = (message: string, data?: any) => ({
  success: true,
  message,
  data: data || null,
});

export const error = (message: string, error?: any) => ({
  success: false,
  message,
  error: error || null,
});
