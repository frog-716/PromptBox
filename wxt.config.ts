import { defineConfig } from 'wxt';

declare const process: { env: Record<string, string | undefined> };

/**
 * PromptBox 构建配置。
 *
 * 只保留 chrome-local 一个目标：仅申请本地存储、右键菜单、剪贴板写入，
 * host_permissions 为空，数据只在本地。
 */
export default defineConfig({
  srcDir: 'src',
  outDir: `${process.env.PROMPTBOX_OUTPUT_ROOT ?? '.output'}/chrome-local`,
  modules: ['@wxt-dev/module-vue'],
  manifest: {
    // 固定扩展 ID：未打包扩展默认按「加载路径」哈希出 ID，移动或改名目录就会换 ID，
    // 而 chrome.storage 的数据目录以 ID 命名，换 ID 等于数据失联。
    // 写入公钥后 ID 由它算出（与路径无关），从此路径怎么变都不会丢数据。
    // 私钥存放在 ~/Documents/PromptBox-extension-key/private.pem，仅打包 crx 时用得到，不进仓库。
    // 注意：这段 key 一旦启用，生成的 ID 为 fdengnopppajpgkknjionijabmnjbobe，不可再随意更换。
    key: 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEArnaN9rJz6LwKvQgOpShSKqkStLwYBiisazsyln3VDzjNWRGBl5lE4DeK3/ocOVq9nah3n/AlqLt85qU6pMt5faIfu63Rp+hsBXB8weQnlfLs/9LSUHLeoVhoLp0i/PTcwzNEWO+NxPGdwpIk0v7qraULmhihuPQL1AY9gD/CnK6GAmkCjNflbhnOQUQ7ccjxuNBHmH2uw/s1IXbgKOJEWkMS8KRkGtNrJueHzVu7FuugogEtBOTNL4FAJu1VomwucL9N1mL1gAY1FJXEoYtvzoJMa6d7iJVM0ST+raUCma4hAM81ni5fun7Lad4Cn4975lo3d2zwDxPyDxJ5wEc8AQIDAQAB',
    name: 'PromptBox',
    description: '随时记录提示词，分类管理，一键复制取用。',
    permissions: ['storage', 'contextMenus', 'clipboardWrite'],
    host_permissions: [],
    minimum_chrome_version: '114',
    action: {
      default_title: '打开提示词本',
    },
  },
});
