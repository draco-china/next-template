# NEXT-TEMPLATE

基于 Next.js 集成:

- Tailwind CSS (支持 pxtorem) 例如 h-[80px] 自动转换为 `height: 5rem`
- shadcn-ui
- 支持主题颜色、主题模式切换
- iconify (支持本地 svg 导入)
- react-query
- axios (API请求)
- valtio (状态管理)
- openapi (基于swagger json 生成 API请求)
- 国际化（i18next）
- 国际化文件自动生成 (@lobehub/i18n-cli)
- Capacitor (打包原生项目)
- PWA (基于 next-pwa)
- sitemap 生成 （build 后自动生成）
- 支持自动化部署到服务器
  - SSG
  - PM2
  - Docker
- 其它功能（app/components/scripts.tsx）
  - rem 自适应
  - 生产环境防 debugger
  - 百度统计
  - 谷歌统计
  - yandex 统计
  - facebook 统计

## Commands

| Command (命令) | English Description | 中文描述 |
| --- | --- | --- |
| android:add | Add Android platform to the project | 添加 Android 平台 |
| android:open | Open Android project in Android Studio | 在 Android Studio 中打开 Android 项目 |
| build | Build the Next.js project | 构建 Next.js 项目 |
| postbuild | Generate sitemap after build | 构建后生成网站地图 |
| deps | Update dependencies and check UI differences | 更新依赖并检查 UI 差异 |
| dev | Start the Next.js development server | 启动 Next.js 开发服务器 |
| export | Export the Next.js project | 导出 Next.js 项目 |
| icon | Generate icons using Iconify | 使用 Iconify 生成图标 |
| ios:add | Add iOS platform to the project | 添加 iOS 平台 |
| ios:open | Open iOS project in Xcode | 在 Xcode 中打开 iOS 项目 |
| lint | Lint the Next.js project | 对 Next.js 项目进行代码检查 |
| locale | Generate local internationalization files (OPENAI_API_KEY in the env file needs to be configured) | 生成本地国际化文件 (需要配置env文件中的 OPENAI_API_KEY) |
| openapi | Generate OpenAPI types | 生成 OpenAPI 类型 |
| standalone | Build Next.js project independent output mode | 构建 Next.js 项目 独立输出模式 |
| start | Start the Next.js production server | 启动 Next.js 生产服务器 |
| sync | Export and sync the project with Capacitor | 导出并同步 Capacitor 项目 |
