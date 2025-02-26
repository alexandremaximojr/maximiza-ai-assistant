import type { AppInfo } from '@/types/app'

// Configurações da API Dify (inseridas diretamente para teste)
export const APP_ID = 'gvbBTYbSYGKotY5j'
export const API_KEY = 'app-4hqurh1ytQvaRbh2vuJFrE9H' // Substitua pela sua API key real
export const API_URL = 'https://udify.app'
export const IS_WORKFLOW = false

// Informações do aplicativo
export const APP_INFO: AppInfo = {
  title: 'Assistente maximiza.AI',
  description: 'App description',
  copyright: '© 2024 maximiza.AI',
  privacy_policy: '',
  default_language: 'pt-BR',
}

// Configurações adicionais que já existiam no arquivo
export const API_PREFIX = '/api'
export const LOCALE_COOKIE_NAME = 'locale'
export const DEFAULT_VALUE_MAX_LEN = 48
