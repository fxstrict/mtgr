/**
 * ============================================================
 * Smart WhatsApp Store - ملف الإعداد
 * ============================================================
 * 
 * خطوات الإعداد:
 * 
 * 1. افتح script.google.com
 * 2. أنشئ مشروعاً جديداً
 * 3. الصق كود Code.gs بالكامل
 * 4. من القائمة: Deploy > New deployment
 * 5. النوع: Web app
 * 6. Execute as: Me
 * 7. Who has access: Anyone
 * 8. انسخ الرابط الناتج (Web app URL)
 * 9. ضعه في المتغير apiUrl أدناه
 * 10. غيّر رقم الواتساب الافتراضي
 * 
 * كلمة المرور الافتراضية: admin123 (غيّرها من Google Apps Script)
 * ============================================================
 */

window.STORE_CONFIG = {

  // *** رابط Google Apps Script - الخطوة الأهم ***
  // ضع رابط الـ Web App هنا بعد النشر
  apiUrl: "https://script.google.com/macros/s/AKfycbxfZ8s_32ylzDrjBGTpP1bYYS-0NwaYzH8N7nHrvv0rFlwCnRYZbdmT1CX1J9yAvtdP/exec",
  // إعدادات أساسية (سيتم تحميلها من قاعدة البيانات تلقائياً)
  // هذه قيم افتراضية تُستخدم قبل تحميل البيانات
  defaults: {
    storeName: "اشيائي",
    currency: "جنيه",
    whatsappNumber: "201000902058"  // غيّر هذا الرقم
  },

  // إصدار النظام
  version: "2.0.0"
};
