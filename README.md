# 專案簡介
本專案為一基礎客戶管理系統之前端應用，使用 Vue3 、 ElementPlus 組件庫搭建，實現便於操作的使用者介面，目前提供一間小型健身工作室使用；點擊以下連結可以進入試用版，歡迎測試並請不吝指導~

🔗 **試用版連結** : <a href="https://seanhuang110633.github.io/ManageSystem_Frontend_Demo/" target="_blank" rel="noopener noreferrer"> Click here 👍</a>

+ **測試帳號**
  + 用戶名：ABC
  + 密碼: 1qaz2wsx
+ **註冊新用戶**
  + 用戶名：長度必須介在 3~20 個字
  + 密碼：長度 8 個字以上，包含數字及英文

# 功能介紹
+ **客戶及用戶資訊增刪改查**:
  +  新增、修改客戶 : 依該健身工作室實際需求設計相關欄位。
  +  刪除客戶 : 邏輯刪除，於資料庫表中將該筆資訊標記為已刪除，非真正刪除。
  +  查詢客戶 : 可透由用戶姓名及電話號碼查詢客戶，並支持模糊查詢(EX: 輸入黃，會查出所有黃姓顧客)。
  +  用戶方面有基本的註冊、登入、修改帳戶資訊、密碼等功能。
+ **客戶態樣分析** 
  + 統計客戶男女比例。
  + 區分不同年度，統計每月新增的客戶數量。
  + 統計不同客戶來源管道，分為社群網路、親友介紹及其他等三項。
# 使用技術
+ **Vue** : 使用 Vue 3 框架開發，充分利用其高效的響應式系統和 Composition API，以提升操作介面的性能和可維護性。
+ **VueRouter** : 負責應用的前端路由管理，實現不同頁面之間的切換和導航，使得路由邏輯清晰流暢。
+ **Pinia** : 作為狀態管理工具，用於集中管理登入用戶的帳戶資訊及 JWT，確保應用中的狀態一致性和易於追踪。
+ **ElementPlus** : 與 Vue 3 完美適配，因此選用其作為 UI 元件庫，優化用戶界面的外觀和操作體驗。
+ **Axios** : 處理前後端的 API 請求，並使用其攔截器功能來統一管理 JWT 的添加和處理異常錯誤，增強數據請求的可靠性和安全性。
+ **Chart.js** : 用於客戶行為分析和數據統計的視覺化呈現，使數據易於理解和決策支持。
# 擴展規劃
+ **完善響應式網頁設計** : 目前系統主要在該健身工作室的桌機上使用，因此未優化 RWD（響應式網頁設計）。未來將針對多終端（如手機和平板）進行適配，以滿足更多場景需求。
+ **增加登入畫面loading圖示** : 當用戶輸入帳號密碼後，會有短暫的靜止時間。計劃在此階段增加 loading 進度條，提升用戶體驗，並探索加速登入的可能性。