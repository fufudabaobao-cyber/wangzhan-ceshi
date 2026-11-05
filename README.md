# HAPBEAR 健身用品展示网站

这是一个英文界面的静态品牌网站，使用 HTML、CSS 和原生 JavaScript 构建。页面、图片、字体和产品数据均随仓库提供，无需构建步骤、数据库或 API 密钥。

在线访问：[网站测试](https://fufudabaobao-cyber.github.io/wangzhan-ceshi/)
代码仓库：[wangzhan-ceshi](https://github.com/fufudabaobao-cyber/wangzhan-ceshi)

## 版本说明

- **当前版本：`v1.0.0`**，版本号记录在根目录 `VERSION` 文件中。
- **版本日期：2026-11-05**（北京时间）。
- **版本范围**：此 GitHub Pages 仓库的静态页面、脚本、样式和本地资源。
- 此版本定义当前功能基线；本次变更仅完善文档与版本标识，未改变网站功能。尚未创建 Git 标签或 GitHub Release。

### 更新记录

| 日期 | 版本 | 内容 |
| --- | --- | --- |
| 2026-11-05 | `v1.0.0` | GitHub Pages 首个文档化版本：品牌首页、三个场景集合、九个品类、29 条商品搜索记录、Amazon 外链、评论轮播及本地联系消息草稿。补充安装、使用、输入输出示例与版本文件。 |

后续版本约定：修复与文档勘误递增补丁版本（如 `1.0.1`），兼容的新功能递增次版本（如 `1.1.0`），不兼容变更递增主版本（如 `2.0.0`）。更新时同步维护 `VERSION` 和本节记录；版本号不会自动触发发布。

## 1. 项目解决什么问题

为浏览 HAPBEAR 健身用品的用户提供集中入口：按运动场景和产品类别浏览商品，通过关键词或 ASIN 找到具体款式，再跳转到对应的 Amazon 商品页面。需要咨询的用户可以在本地整理联系消息，复制到品牌联系页面发送。

本项目是产品展示与导购网站，没有站内购物车、支付、用户账户、订单查询接口或后台管理系统。商品数据为仓库内的静态内容，不会实时同步价格、库存或评论。

## 2. 主要功能

- **品牌与商品展示**：首页展示品牌、运动场景和精选产品，支持切换首页产品展示面板。
- **分类浏览**：提供 Yoga & Pilates、Strength & equipment、Balance & recovery 三个场景集合；包含运动垫、阻力带、器械垫、瑜伽垫、平衡垫、按摩球、健身球、瑜伽巾和瑜伽砖九个品类。当前搜索数据有 29 条商品记录。
- **本地商品搜索**：支持独立搜索页及其他页面上的搜索弹窗；可按类别筛选，并匹配商品标题、规格说明、ASIN 和英文类别名。搜索忽略大小写，多个空格分隔的词需要全部匹配；支持快捷分类、清空和无结果重置。
- **商品外链**：点击 `View on Amazon` 在新标签页打开对应商品链接。
- **评论展示**：首页展示预置的阻力带评论及来源链接，支持前后切换、播放与暂停。页面的 4.4/5、2,598 条评分是阻力带的静态展示数据，不代表全站商品评分。
- **联系消息草稿**：校验姓名、邮箱和消息等字段，在页面生成文本，并支持复制到剪贴板。需要用户前往品牌联系页面另行提交；本页面不会发送消息或持久保存表单内容。
- **响应式交互**：提供移动端菜单、键盘导航及减少动态效果偏好适配。

## 3. 安装方法

### 环境要求

- 支持 JavaScript 的现代浏览器。
- Git：用于克隆仓库；也可以从 GitHub 下载 ZIP 后解压。
- Python 3：仅用于下文的本地 HTTP 预览，也可使用其他静态文件服务器。
- 当前仓库公开，克隆无需登录；推送更新需要仓库写入权限。

### 获取代码

```bash
git clone https://github.com/fufudabaobao-cyber/wangzhan-ceshi.git
cd wangzhan-ceshi
```

本项目无需运行 `npm install`，也无需配置环境变量。

## 4. 使用方法

### 本地运行

在仓库根目录执行：

```bash
python3 -m http.server 8765 --bind 127.0.0.1
```

打开 <http://127.0.0.1:8765/>。按 `Ctrl+C` 停止服务器。

也可以直接打开 `index.html` 浏览；建议使用本地 HTTP 服务检查交互。复制消息需要浏览器允许剪贴板访问；失败时页面会选中文本，提示手动复制。页面使用本地资源，访问 Amazon、评论来源及品牌联系页面需要联网。

### 浏览、搜索与联系

1. 从首页 `Shop` 菜单或 `collections.html` 进入产品分类。
2. 点击放大镜打开搜索，或访问 `search.html`，输入英文关键词、规格或 ASIN，并按需选择类别。
3. 点击搜索结果的标题或图片进入分类页；点击 `View on Amazon` 查看对应商品。
4. 在 `contact.html` 填写联系表单，点击 `Prepare message` 生成草稿，再用 `Copy message` 复制并前往品牌联系页面发送。
5. 首页评论区可用前后按钮切换评论，用 `Pause` / `Play` 控制自动滚动。

### 主要文件与维护

| 文件或目录 | 用途 |
| --- | --- |
| `index.html` | 品牌首页与评论展示 |
| `collections.html` | 全部产品分类入口 |
| `yoga-pilates.html`、`strength-equipment.html`、`balance-recovery.html` | 三个运动场景集合页 |
| `exercise-mats.html` 等品类页面 | 商品与款式展示 |
| `search.html` | 独立搜索页 |
| `contact.html` | 联系入口与本地消息草稿 |
| `styles.css` | 主要页面样式 |
| `script.js` | 移动导航、首页产品切换与滚动效果 |
| `experience.js` | 分类菜单、搜索、联系草稿与评论轮播 |
| `assets/site-data.js` | 浏览器搜索直接使用的 `window.HAPBEAR_DATA` 数据 |
| `assets/catalog.json`、`assets/reviews.json`、`assets/sources.json` | 产品、评论及来源资料 |
| `assets/images/`、`assets/fonts/`、`assets/brand/` | 本地图片、字体及品牌素材 |
| `.nojekyll` | 使 GitHub Pages 直接提供静态文件 |
| `VERSION` | 当前项目版本号 |

页面和搜索数据没有自动生成或同步流程。修改商品时，需要同步检查相关 HTML 页面与 `assets/site-data.js`；仅修改 `assets/catalog.json` 不会自动更新页面或搜索结果。首页评论也直接写在 HTML 中。

### GitHub Pages 发布与更新

本仓库已配置从 `main` 分支根目录 `/` 发布，无需构建命令。设置位置为 GitHub 仓库的 **Settings → Pages → Build and deployment → Deploy from a branch**。根目录的 `.nojekyll` 文件随站点保留。

修改页面或资源后，在仓库根目录提交并推送需要发布的文件，例如：

```bash
git add index.html styles.css
git commit -m "Update homepage"
git push origin main
```

请按实际修改替换 `git add` 的文件名。在仓库 **Actions** 页面查看 `pages-build-deployment` 的执行结果；成功后访问在线网址检查更新。本地修改不会自动上传；提交代码也不等于部署已经完成。

如果复制到自己的新仓库，需要在该仓库启用 Pages 并使用它对应的网址。页面与资源使用相对路径，支持当前 `/wangzhan-ceshi/` 子路径部署。

## 5. 输入输出示例

以下示例基于当前仓库中的数据与前端逻辑，输出显示在浏览器页面中，不是 API 响应。

### 示例 A：按 ASIN 搜索

输入：打开 <http://127.0.0.1:8765/search.html?q=B0CSKCYSBQ>，类别保持 `All categories`。

预期输出：

```text
1 product
Exercise mats
Large Exercise Mat
7′ × 5′ · Gray · 8 mm PVC
View on Amazon ↗
```

商品按钮指向 `https://www.amazon.com/dp/B0CSKCYSBQ`，标题和图片指向 `exercise-mats.html`。

### 示例 B：搜索无匹配商品

输入：在搜索框中输入 `zzzz-no-match-12345`，类别保持 `All categories`。

预期输出：

```text
0 products
No products found.
Try “mat”, “bands”, or a product ASIN, or choose another category.
Show all products
```

点击 `Show all products` 会清空关键词和类别筛选，恢复展示当前的 29 条商品记录。

### 示例 C：生成联系消息

输入：

```text
Your name: Alex
Email address: alex@example.com
How can we help?: Product question
Order number: 留空
Your message: Is this mat suitable for home workouts?
```

点击 `Prepare message` 后，文本框输出：

```text
Name: Alex
Email: alex@example.com
Topic: Product question

Is this mat suitable for home workouts?
```

页面同时显示 `Prepared locally. Your message has not been sent.`。复制成功后显示 `Copied. Paste it on the HAPBEAR contact page to send.`；这一步不会发送邮件或创建客服工单。
