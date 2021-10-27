# EB_DOM_INJ_BEEP_ON_ALERT

DEVELOPED FOR EB v3.2.5.0 - TESTED ON EC30 A11

*INSTRUCTIONS*

TO SEE THE ORIGINAL "ALERT" BEHAVIOR (NO SOUND) 
-RENAME Config_ORIGINAL_ALERT_NO_BEEP.xml AS Config.xml
-COPY Config.xml and eb_alert_sounds.html to  /sdcard/Android/data/com.symbol.enterprisebrowser
-RUN EB

TO HEAR A BEEP FOR EVERY ALERT
-RENAME Config_ALERT_WITH_BEEP.xml AS Config.xml
-COPY Config.xml and all the remaining files to  /sdcard/Android/data/com.symbol.enterprisebrowser
-RUN EB

EXPLANATION: USING THE EB DOM INJECTION, THE ORIGINAL JAVASCRIPT FUNCTION window.Alert IS OVERRIDDEN AND A BEEP HAS BEEN ADDED
