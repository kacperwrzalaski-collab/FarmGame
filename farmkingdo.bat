@echo off
setlocal EnableDelayedExpansion
chcp 65001 >nul
title Farm-Kingdom 2026

:: =======================
::        MENU GŁÓWNE
:: =======================
:intro
cls
echo ░█████╗░███╗░░░███╗██████╗░  ███████╗░█████╗░██████╗░███╗░░░███╗
echo ██╔══██╗████╗░████║██╔══██╗  ██╔════╝██╔══██╗██╔══██╗████╗░████║
echo ██║░░╚═╝██╔████╔██║██║░░██║  █████╗░░███████║██████╔╝██╔████╔██║
echo ██║░░██╗██║╚██╔╝██║██║░░██║  ██╔══╝░░██╔══██║██╔══██╗██║╚██╔╝██║
echo ╚█████╔╝██║░╚═╝░██║██████╔╝  ██║░░░░░██║░░██║██║░░██║██║░╚═╝░██║
echo ░╚════╝░╚═╝░░░░░╚═╝╚═════╝░  ╚═╝░░░░░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░░░░╚═╝
echo.
echo ╔════════════════════════════════════╗
echo ║  [1] Nowa gra                      ║
echo ║  [2] Wczytaj zapis                 ║
echo ║  [3] Informacje o aktualizacji     ║
echo ║  [0] Wyjdz                         ║
echo ╚════════════════════════════════════╝
set /p start="> "

if "%start%"=="1" goto new_game
if "%start%"=="2" goto load_game
if "%start%"=="3" goto updates_info
if "%start%"=="0" exit
goto intro

:: =======================
:: INFORMACJE O AKTUALIZACJI
:: =======================
:updates_info
cls
echo ===========================
echo  INFORMACJE O AKTUALIZACJI
echo ===========================
echo Wersja: 1.3
echo Najnowsza aktualizacja dodaje:
echo - Sklep z nasionami i zwierzetami
echo - Targ do sprzedazy plonow i zwierzat
echo - Zwierzeta z czasem zycia (30 sekund)
echo - Pory roku co 10 tur
pause
goto intro

:: =======================
::      NOWA GRA
:: =======================
:new_game
cls
echo ╔════════════════╗
echo ║ Podaj nazwe gry ║
echo ╚════════════════╝
set /p save_name="> "
if "%save_name%"=="" set save_name=Farm

:: =======================
:: STARTOWE STATYSTYKI
:: =======================
set money=50
set hunger=10
set thirst=10
set farm_lvl=1
set farm_cost=100
set income=20
set turn_count=0

:: Plony i nasiona
set wheat=0
set carrot=0
set corn=0
set potato=1
set strawberry=0
set seed_wheat=0
set seed_carrot=0
set seed_corn=0
set seed_strawberry=0

:: Zwierzeta i czas zycia
set chicken=0
set sheep=0
set pig=0
set cow=0
set horse=0
set chicken_t=0
set sheep_t=0
set pig_t=0
set cow_t=0
set horse_t=0

goto game_loop

:: =======================
::      PĘTLA GRY
:: =======================
:game_loop
cls
call :draw_ui
call :action_menu
goto game_loop

:: =======================
::        UI
:: =======================
:draw_ui
set /a storage_used=wheat+carrot+corn+potato+strawberry
set /a storage_max=25 + (farm_lvl - 1) * 5
set /a animals_total=chicken+sheep+pig+cow+horse
set /a pen_max=10 + (farm_lvl - 1) * 2

:: Pory roku
set /a season_index=(turn_count/10) %% 4
if !season_index! EQU 0 set season=Wiosna 🌱
if !season_index! EQU 1 set season=Lato ☀️
if !season_index! EQU 2 set season=Jesien 🍂
if !season_index! EQU 3 set season=Zima ❄️

echo ╔════════════════════════════════════════════════════════════════════════════════════════════════╗
echo ║ 🧾 !save_name!   💰 !money!$   📈 !income!$   🏡 LVL !farm_lvl!   🌍 !season!                     ║
echo ╠════════════════════════════════════════════════════════════════════════════════════════════════╣
echo ║ 📦 MAGAZYN: !storage_used!/!storage_max!        🐾 ZAGRODA: !animals_total!/!pen_max!                ║
echo ║ 🌾 P:!wheat! 🥕 M:!carrot! 🌽 K:!corn! 🥔 Z:!potato! 🍓 T:!strawberry!                             ║
echo ║ 🐔 Kury:!chicken! 🐑 Owce:!sheep! 🐖 Sw:!pig! 🐄 Kr:!cow! 🐎 Ko:!horse!                             ║
echo ╠════════════════════════════════════════════════════════════════════════════════════════════════╣
call :bar hunger "🍗 GLOD "
call :bar thirst "💧 WODA "
echo ╚════════════════════════════════════════════════════════════════════════════════════════════════╝
exit /b

:bar
set bar=
for /L %%i in (1,1,10) do (
 if %%i LEQ !%1! (set bar=!bar!■) else (set bar=!bar!_)
)
echo ║ %2 [!bar!] !%1!/10
exit /b

:: =======================
::      MENU AKCJI
:: =======================
:action_menu
echo.
echo [1] Pracuj
echo [2] Jedzenie (10$)
echo [3] Woda (10$)
echo [4] Ulepsz farme
echo [5] Targ
echo [6] Sklep
echo [S] Zapisz
echo [0] Wyjdz
set /p act="> "

if "%act%"=="1" call :work
if "%act%"=="2" call :eat
if "%act%"=="3" call :drink
if "%act%"=="4" call :upgrade
if "%act%"=="5" call :market
if "%act%"=="6" call :shop
if /I "%act%"=="S" call :save_game
if "%act%"=="0" exit
exit /b

:: =======================
::        PRACA
:: =======================
:work
set /a money+=income
set /a hunger-=1
set /a thirst-=1
set /a turn_count+=1

call :get_time

:: Losowe plony tylko te nasiona ktore kupiles
set /a roll=%RANDOM% %% 5
if !roll! EQU 0 if !seed_wheat! EQU 1 set /a wheat+=farm_lvl
if !roll! EQU 1 if !seed_carrot! EQU 1 set /a carrot+=farm_lvl
if !roll! EQU 2 if !seed_corn! EQU 1 set /a corn+=farm_lvl
if !roll! EQU 3 set /a potato+=farm_lvl
if !roll! EQU 4 if !seed_strawberry! EQU 1 set /a strawberry+=farm_lvl

call :animal_life
call :death_check
exit /b

:: =======================
::        CZAS
:: =======================
:get_time
for /f "tokens=1-3 delims=:." %%a in ("%TIME%") do (
 set /a NOW_SEC=%%a*3600 + %%b*60 + %%c
)
exit /b

:: =======================
::   ZYCIE ZWIERZAT
:: =======================
:animal_life
call :get_time
if !chicken! GTR 0 if !NOW_SEC!-!chicken_t! GEQ 30 (set /a chicken-=1 & set /a income-=5 & set chicken_t=0)
if !sheep! GTR 0 if !NOW_SEC!-!sheep_t! GEQ 30 (set /a sheep-=1 & set /a income-=12 & set sheep_t=0)
if !pig! GTR 0 if !NOW_SEC!-!pig_t! GEQ 30 (set /a pig-=1 & set /a income-=25 & set pig_t=0)
if !cow! GTR 0 if !NOW_SEC!-!cow_t! GEQ 30 (set /a cow-=1 & set /a income-=45 & set cow_t=0)
if !horse! GTR 0 if !NOW_SEC!-!horse_t! GEQ 30 (set /a horse-=1 & set /a income-=70 & set horse_t=0)
exit /b

:: =======================
::        SKLEP
:: =======================
:shop
cls
echo [1] Nasiona
echo [2] Zwierzeta
echo [0] Powrot
set /p s="> "
if "%s%"=="1" goto shop_seeds
if "%s%"=="2" goto shop_animals
exit /b

:shop_seeds
cls
echo [1] Pszenica    (100$)
echo [2] Marchew     (75$)
echo [3] Kukurydza   (150$)
echo [4] Truskawka   (125$)
set /p s="> "
if "%s%"=="1" if !money! GEQ 100 set /a money-=100 & set seed_wheat=1
if "%s%"=="2" if !money! GEQ 75 set /a money-=75 & set seed_carrot=1
if "%s%"=="3" if !money! GEQ 150 set /a money-=150 & set seed_corn=1
if "%s%"=="4" if !money! GEQ 125 set /a money-=125 & set seed_strawberry=1
exit /b

:shop_animals
cls
call :get_time
echo [1] Kura 150$
echo [2] Owca 300$
echo [3] Swinia 500$
echo [4] Krowa 800$
echo [5] Kon 1200$
set /p a="> "
if "%a%"=="1" if !money! GEQ 150 set /a money-=150 & set /a chicken+=1 & set /a income+=5 & set chicken_t=!NOW_SEC!
if "%a%"=="2" if !money! GEQ 300 set /a money-=300 & set /a sheep+=1 & set /a income+=12 & set sheep_t=!NOW_SEC!
if "%a%"=="3" if !money! GEQ 500 set /a money-=500 & set /a pig+=1 & set /a income+=25 & set pig_t=!NOW_SEC!
if "%a%"=="4" if !money! GEQ 800 set /a money-=800 & set /a cow+=1 & set /a income+=45 & set cow_t=!NOW_SEC!
if "%a%"=="5" if !money! GEQ 1200 set /a money-=1200 & set /a horse+=1 & set /a income+=70 & set horse_t=!NOW_SEC!
exit /b

:: =======================
::        TARG
:: =======================
:market
cls
:market_menu
echo ==== TARG ====
echo [1] Sprzedaj plony
echo [2] Sprzedaj zwierzeta
echo [0] Powrot
set /p m="> "

if "%m%"=="1" goto market_plants
if "%m%"=="2" goto market_animals
if "%m%"=="0" exit /b
goto market_menu

:market_plants
cls
echo Sprzedaz plonow:
echo [1] Pszenica: !wheat! szt. (8$/szt.)
echo [2] Marchew: !carrot! szt. (5$/szt.)
echo [3] Kukurydza: !corn! szt. (9$/szt.)
echo [4] Ziemniaki: !potato! szt. (2$/szt.)
echo [5] Truskawki: !strawberry! szt. (3$/szt.)
echo [0] Powrot
set /p p="Co sprzedac? "

if "%p%"=="1" set /a money+=wheat*8 & set wheat=0
if "%p%"=="2" set /a money+=carrot*5 & set carrot=0
if "%p%"=="3" set /a money+=corn*9 & set corn=0
if "%p%"=="4" set /a money+=potato*2 & set potato=0
if "%p%"=="5" set /a money+=strawberry*3 & set strawberry=0
if "%p%"=="0" goto market_menu
goto market_plants

:market_animals
cls
echo Sprzedaz zwierzat:
echo [1] Kury: !chicken! szt.
echo [2] Owce: !sheep! szt.
echo [3] Swinie: !pig! szt.
echo [4] Krowy: !cow! szt.
echo [5] Konie: !horse! szt.
echo [0] Powrot
set /p a="Co sprzedac? "

if "%a%"=="1" set /a money+=chicken*100 & set income-=chicken*5 & set chicken=0 & set chicken_t=0
if "%a%"=="2" set /a money+=sheep*300 & set income-=sheep*12 & set sheep=0 & set sheep_t=0
if "%a%"=="3" set /a money+=pig*500 & set income-=pig*25 & set pig=0 & set pig_t=0
if "%a%"=="4" set /a money+=cow*800 & set income-=cow*45 & set cow=0 & set cow_t=0
if "%a%"=="5" set /a money+=horse*1200 & set income-=horse*70 & set horse=0 & set horse_t=0
if "%a%"=="0" goto market_menu
goto market_animals

:: =======================
::      POZOSTALE
:: =======================
:eat
if !money! GEQ 10 set /a money-=10 & set hunger=10
exit /b

:drink
if !money! GEQ 10 set /a money-=10 & set thirst=10
exit /b

:upgrade
if !money! GEQ !farm_cost! (
 set /a money-=farm_cost
 set /a farm_lvl+=1
 set /a income+=15
 set /a farm_cost*=2
)
exit /b

:death_check
if !hunger! LEQ 0 goto dead
if !thirst! LEQ 0 goto dead
exit /b

:dead
cls
echo KONIEC GRY
pause
goto intro

:: =======================
::     ZAPIS / ODCZYT
:: =======================
:save_game
(
echo !save_name!
echo !money!
echo !hunger!
echo !thirst!
echo !farm_lvl!
echo !farm_cost!
echo !income!
echo !wheat!
echo !carrot!
echo !corn!
echo !potato!
echo !strawberry!
echo !seed_wheat!
echo !seed_carrot!
echo !seed_corn!
echo !seed_strawberry!
echo !chicken!
echo !sheep!
echo !pig!
echo !cow!
echo !horse!
echo !chicken_t!
echo !sheep_t!
echo !pig_t!
echo !cow_t!
echo !horse_t!
echo !turn_count!
) > "!save_name!.dat"
exit /b

:load_game
cls
echo ==== DOSTEPNE ZAPISY ====
if not exist *.dat (
    echo ❌ Brak zapisanych gier!
    timeout /t 2 >nul
    goto intro
)
for %%f in (*.dat) do echo %%~nf

echo.
set /p save_name="Wpisz nazwe zapisu: "

if not exist "!save_name!.dat" (
    echo ❌ Nie znaleziono zapisu o takiej nazwie!
    timeout /t 2 >nul
    goto intro
)

< "!save_name!.dat" (
set /p save_name=
set /p money=
set /p hunger=
set /p thirst=
set /p farm_lvl=
set /p farm_cost=
set /p income=
set /p wheat=
set /p carrot=
set /p corn=
set /p potato=
set /p strawberry=
set /p seed_wheat=
set /p seed_carrot=
set /p seed_corn=
