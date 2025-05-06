"use client";

import { useContext, useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GameContext from "@/app/context/GameContext";
import { hasWon } from "@/data/winConditions";
import { locations } from "@/data/locations";
import LocationDetail from "./LocationDetail";
import Map from "./Map";
import PlayerSelect from "./PlayerSelect";
import Header from "./Header";
import University from "./University";
import Stats from "./Stats";
import GoalsTracker from "./GoalsTracker";
import GameOver from "./GameOver";
import RentalOffice from "./RentalOffice";
import MessageArea from "./MessageArea";
import NextJs from "./NextJs";
import FastFood from "./FastFood";
import CssHotel from "./CssHotel";
import PythonHotel from "./PythonHotel";
import JavaScriptHotel from "./JavaScriptHotel";
import TypeScriptHolidayResort from "./TypeScriptHolidayResort";
import ExpressHotel from "./ExpressHotel";
import CSharpHotel from "./CSharpHotel";
import ReactNativeUniversity from "./ReactNativeUniversity";
import JavaResort from "./JavaResort";
import GamingHotel from "./GamingHotel";
import Apartment from "./Apartment";
import Mall from "./Mall";
import DatingOffice from "./DatingOffice";
import SaveLoadMenu from "./SaveLoadMenu";
import Devwork from "./Devwork";
import * as audioManager from "@/data/audioManager";

export default function GameContainer() {
    const { state, dispatch } = useContext(GameContext);
    const { currentScreen, gameWon, isPlayerSelect, player, message, gameEnded, isWalking } = state;
    const [isAssetsLoaded, setIsAssetsLoaded] = useState(false);

    const midTierLocations = [
        'rentOffice',
        'devWork',
        'apartment',
        'mall',
        'fastFood',
        'datingOffice'
    ];

    const imageUrls = useMemo(() => [
        "https://cdn.pixabay.com/photo/2021/09/26/20/49/world-6658881_1280.jpg",
        // location images
        "https://images.unsplash.com/photo-1534655610770-dd69616f05ff?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D", // apartment
        "https://img.freepik.com/free-photo/mall-america-scenes-cinematic-style_23-2151551299.jpg?uid=R194451028&ga=GA1.1.1480099583.1741975489&semt=ais_hybrid&w=740", // mall
        "https://img.freepik.com/free-photo/luxury-hotel-lobby_1127-3173.jpg?uid=R194451028&ga=GA1.1.1480099583.1741975489&semt=ais_hybrid&w=740", // cssHotel
        "https://img.freepik.com/free-photo/view-pretty-woman-black-short-dress-sitting-table-terrace-cafeteria-she-is-looking-camera_197531-1094.jpg?uid=R194451028&ga=GA1.1.1480099583.1741975489&semt=ais_hybrid&w=740", // rentOffice
        "https://media.istockphoto.com/id/907614450/photo/luxury-resort-hotel-with-swimming-pool-at-sunset.jpg?s=612x612&w=0&k=20&c=eUijzw-MkPw00HAw464I3mwa4b17yhrfvh5HiGZiEqo=", // nextJsSchool
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=60", // devWork
        "https://img.freepik.com/premium-photo/homemade-burger-with-beef-cheese-onion-marmalade-wooden-board-fast-food-concept-american-food_90258-3917.jpg?uid=R194451028&ga=GA1.1.1480099583.1741975489&semt=ais_hybrid&w=740", // fastFood
        "https://images.unsplash.com/photo-1568792923760-d70635a89fdc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVuaXZlcnNpdHl8ZW58MHx8MHx8fDA%3D", // university
        "https://images.pexels.com/photos/2837909/pexels-photo-2837909.jpeg?auto=compress&cs=tinysrgb&w=600", // javaScriptHotel
        "https://img.freepik.com/free-photo/modern-hotel-lobby-with-reception-desk_1127-3174.jpg?uid=R194451028&ga=GA1.1.1480099583.1741975489&semt=ais_hybrid&w=740", // pythonHotel
        "https://images.pexels.com/photos/13045627/pexels-photo-13045627.jpeg?auto=compress&cs=tinysrgb&w=800", // typeScriptHolidayResort
        "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=600", // expressHotel
        "https://img.freepik.com/free-photo/luxury-hotel-lobby_1127-3173.jpg?uid=R194451028&ga=GA1.1.1480099583.1741975489&semt=ais_hybrid&w=740", // cSharpHotel
        "https://media.istockphoto.com/id/2149035292/photo/state-college-penn-state-university-pennsylvania-students-walk-the-paths-to-class.jpg?s=612x612&w=0&k=20&c=Y-FNVfkffLr9D-tXE7BkcmeffMOdzDiNIrJq88Meav0=", // reactNativeUniversity
        "https://media.istockphoto.com/id/119926339/photo/resort-swimming-pool.jpg?s=612x612&w=0&k=20&c=9QtwJC2boq3GFHaeDsKytF4-CavYKQuy1jBD2IRfYKc=", // javaResort
        "https://media.istockphoto.com/id/880722946/photo/beach-holidays-luxury-swimming-pool-with-palm-trees.jpg?s=612x612&w=0&k=20&c=HH7LweDyoBsCzM-El-xkO5AQYcrHxMLVRFFIWQDPwWQ=", // gamingHotel
        // dating images
        "https://img.freepik.com/free-photo/full-shot-woman-bdsm-aesthetics_23-2151117243.jpg?uid=R194451028&ga=GA1.1.1480099583.1741975489&semt=ais_hybrid&w=740",
        "https://img.freepik.com/free-photo/high-fashion-look-glamor-stylish-beautiful-young-brunette-woman-model-summer-bright-hipster-cloth-sunglasses_158538-14149.jpg?uid=R194451028&ga=GA1.1.1480099583.1741975489&semt=ais_hybrid&w=740",
        "https://img.freepik.com/premium-photo/feeling-free-express-her-sensuality-beautiful-young-woman-sports-uniform-touching-her-cap_425904-8025.jpg?uid=R194451028&ga=GA1.1.1480099583.1741975489&semt=ais_hybrid&w=740",
        "https://img.freepik.com/free-photo/lifestyle-fashion-portrait-young-woman-with-perfect-fit-body-wearing-stylish-bright-summer-clothes-have-long-hairs-bright-makeup-having-fun-alone_291049-548.jpg?uid=R194451028&ga=GA1.1.1480099583.1741975489&semt=ais_hybrid&w=740",
        "https://img.freepik.com/premium-photo/young-beautiful-sexy-woman-with-beautiful-slim-legs-black-denim-jacket-with-stylish-jeans-shorts-with-black-cap-leather-shoes-posing-city-urban-women-s-style-look_338491-10565.jpg?uid=R194451028&ga=GA1.1.1480099583.1741975489&semt=ais_hybrid&w=740",
        "https://img.freepik.com/free-photo/young-beautiful-woman-wearing-red-lingerie-bed-morning_158538-10345.jpg?uid=R194451028&ga=GA1.1.1480099583.1741975489&semt=ais_hybrid&w=740",
        "https://img.freepik.com/free-photo/blonde-girl-posing-white-with-closed-eyes_158538-8401.jpg?uid=R194451028&ga=GA1.1.1480099583.1741975489&semt=ais_hybrid&w=740",
        "https://img.freepik.com/premium-photo/young-lady-sitting-recliner-posing-stylish-outfit-warm-sunny-mood_273443-4826.jpg?uid=R194451028&ga=GA1.1.1480099583.1741975489&semt=ais_hybrid&w=740",
        "https://img.freepik.com/free-photo/fashion-portrait-smiling-brunette-blond-models-summer-casual-clothes-colorful-pink-wall_158538-14863.jpg?uid=R194451028&ga=GA1.1.1480099583.1741975489&semt=ais_hybrid&w=740",
        "https://img.freepik.com/free-photo/indoor-bright-fashion-summer-portrait-stylish-happy-hipster-woman-smoking-having-fun-have-long-brunette-hairs-perfect-tanned-fit-slim-body-wearing-crop-top-round-sunglasses_291049-481.jpg?uid=R194451028&ga=GA1.1.1480099583.1741975489&semt=ais_hybrid&w=740",
        "https://img.freepik.com/premium-photo/portrait-body-wake-up-with-sexy-man-lying-shirtless-bedroom-his-home-morning-relax-arm-muscle-with-handsome-young-male-model-resting-topless-bed-sensuality_590464-173033.jpg?uid=R194451028&ga=GA1.1.1480099583.1741975489&semt=ais_hybrid&w=740",
        "https://img.freepik.com/premium-photo/shirtless-sexy-man-have-rest-alone-his-bedroom-morning-time_146671-28571.jpg?uid=R194451028&ga=GA1.1.1480099583.1741975489&semt=ais_hybrid&w=740",
        "https://img.freepik.com/free-photo/young-handsome-muscled-fit-male-model-man-posing-studio-showing-his-abdominal-muscles-leather-jacket_158538-2234.jpg?uid=R194451028&ga=GA1.1.1480099583.1741975489&semt=ais_hybrid&w=740",
        "https://img.freepik.com/premium-photo/man-face-relax-shirtless-bed-bedroom-his-home-confident-serious-topless-male-model-laying-with-hot-guy-look-morning-skincare-body-wellness-after-wake-up_590464-180105.jpg?uid=R194451028&ga=GA1.1.1480099583.1741975489&semt=ais_hybrid&w=740",
        "https://img.freepik.com/free-photo/young-man-with-six-packs-posing-pink-wall_23-2148289260.jpg?uid=R194451028&ga=GA1.1.1480099583.1741975489&semt=ais_hybrid&w=740",
        "https://img.freepik.com/free-photo/young-sportive-african-man-posing-black-wall_176420-2515.jpg?uid=R194451028&ga=GA1.1.1480099583.1741975489&semt=ais_hybrid&w=740",
        "https://img.freepik.com/free-photo/man-bed-working-laptop-checking-mail-watching-movie-listening-music_1321-1007.jpg?uid=R194451028&ga=GA1.1.1480099583.1741975489&semt=ais_hybrid&w=740",
        "https://img.freepik.com/free-photo/portrait-handsome-sunbathed-fashion-man-model-posing-summer-beach-with-white-sand-blue-sky_158538-1791.jpg?uid=R194451028&ga=GA1.1.1480099583.1741975489&semt=ais_hybrid&w=740",
        "https://img.freepik.com/premium-photo/young-healthy-good-looking-macho-man-model-athlete-hotel-indoor-pool_530697-44102.jpg?uid=R194451028&ga=GA1.1.1480099583.1741975489&semt=ais_hybrid&w=740",
        "https://img.freepik.com/premium-photo/handsome-man-standing-looking-camera-wearing-jean-vest-naked-torso_505281-105.jpg?uid=R194451028&ga=GA1.1.1480099583.1741975489&semt=ais_hybrid&w=740",
        // Shop item images from shopItems array
        "https://media.istockphoto.com/id/2166351477/photo/flat-screen-tv-from-angled-view-with-rural-landscape-with-straw-roll-and-sunset-sky-on-screen.jpg?s=612x612&w=0&k=20&c=KJVGIfQgla8mmCpV8MAObM-nrJ9nHNt3n6daTfqyJ38=", // Flat-Screen TV
        "https://media.istockphoto.com/id/1274049367/photo/classic-furniture.jpg?s=612x612&w=0&k=20&c=Cv_bEO6Liepr5HsAfQ2r8gm_Y2e84a6Qc8F_g7KeQ-c=", // Comfy Sofa
        "https://img.freepik.com/free-photo/ai-powered-device-concept_23-2151924131.jpg?uid=R194451028&ga=GA1.1.1480099583.1741975489&semt=ais_hybrid&w=740", // Gaming Console
        "https://media.istockphoto.com/id/1532459823/photo/modern-living-room-interior-at-night-with-bookshelf-sofa-armchairs-potted-plant-and-air.jpg?s=612x612&w=0&k=20&c=nTkpQlBgVRiqL6JCgoHwzT79D03EAuAzUEOnr9SuOfo=", // Bookshelf
        "https://img.freepik.com/free-photo/still-life-books-versus-technology_23-2150062920.jpg?uid=R194451028&ga=GA1.1.1480099583.1741975489&semt=ais_hybrid&w=740", // High-End Laptop
        "https://img.freepik.com/free-photo/view-3d-coffee-cup-with-machine_23-2151083728.jpg?uid=R194451028&ga=GA1.1.1480099583.1741975489&semt=ais_hybrid&w=740", // Coffee Machine
        "https://img.freepik.com/free-photo/headphones-displayed-against-dark-background_157027-4466.jpg?uid=R194451028&ga=GA1.1.1480099583.1741975489&semt=ais_hybrid&w=740", // Noise-Cancelling Headphones
        "https://img.freepik.com/free-vector/realistic-fitness-trackers_23-2148530529.jpg?uid=R194451028&ga=GA1.1.1480099583.1741975489&semt=ais_hybrid&w=740", // Smartwatch
        "https://img.freepik.com/premium-photo/cast-iron-black-adjustable-dumbbells-weightlifting-gym-equipment-side-view_92242-6370.jpg?uid=R194451028&ga=GA1.1.1480099583.1741975489&semt=ais_hybrid&w=740", // Dumbbell Set
        "https://img.freepik.com/free-photo/potted-plant_1308-106251.jpg?uid=R194451028&ga=GA1.1.1480099583.1741975489&semt=ais_hybrid&w=740", // Desk Plant
        "https://img.freepik.com/free-photo/futuristic-device-vr-glasses_23-2151924231.jpg?uid=R194451028&ga=GA1.1.1480099583.1741975489&semt=ais_hybrid&w=740", // VR Headset
        "https://img.freepik.com/free-photo/modern-office-chair-isolated-white-background_181624-45253.jpg?uid=R194451028&ga=GA1.1.1480099583.1741975489&semt=ais_hybrid&w=740", // Ergonomic Chair
        "https://img.freepik.com/free-photo/man-using-digital-tablet_53876-119721.jpg?uid=R194451028&ga=GA1.1.1480099583.1741975489&semt=ais_hybrid&w=740", // Tablet
        "https://img.freepik.com/premium-photo/hand-throws-dice-board-game_97716-373.jpg?uid=R194451028&ga=GA1.1.1480099583.1741975489&semt=ais_hybrid&w=740", // Strategy Board Game
        "https://img.freepik.com/free-photo/young-woman-using-home-technology_23-2149216659.jpg?uid=R194451028&ga=GA1.1.1480099583.1741975489&semt=ais_hybrid&w=740", // Air Purifier
        "https://img.freepik.com/free-photo/side-view-electric-modern-kettle-with-whistle-wooden-table-kitchen_140725-12881.jpg?uid=R194451028&ga=GA1.1.1480099583.1741975489&semt=ais_hybrid&w=740", // Electric Kettle
        "https://img.freepik.com/free-photo/smart-home-speaker_23-2148623458.jpg?uid=R194451028&ga=GA1.1.1480099583.1741975489&semt=ais_hybrid&w=740", // Smart Speaker
        "https://img.freepik.com/free-photo/sside-view-hand-with-smartphone-smart-light_23-2150671605.jpg?uid=R194451028&ga=GA1.1.1480099583.1741975489&semt=ais_hybrid&w=740", // Inspirational Art Print
        "https://img.freepik.com/free-photo/still-life-yoga-room_23-2148108602.jpg?uid=R194451028&ga=GA1.1.1480099583.1741975489&semt=ais_hybrid&w=740", // Yoga Mat
        "https://img.freepik.com/premium-vector/abstract-leaves-shape-leaf-boho-modern-minimalist-clipart_574890-60.jpg?uid=R194451028&ga=GA1.1.1480099583.1741975489&semt=ais_hybrid&w=740", //art print
        "https://img.freepik.com/premium-photo/sweet-strawberries-ripe-bananas-blender-near-bowls-cutting-board-grey_1188894-7823.jpg?uid=R194451028&ga=GA1.1.1480099583.1741975489&semt=ais_hybrid&w=740", // High-Speed Blender
        "https://img.freepik.com/free-photo/bright-computer-equipment-illuminated-dark-office-background-generated-by-artificial-intelligence_24877-80953.jpg?uid=R194451028&ga=GA1.1.1480099583.1741975489&semt=ais_hybrid&w=740", // Gaming Mouse
        "https://img.freepik.com/free-photo/modern-desk-lamp_23-2147923459.jpg?uid=R194451028&ga=GA1.1.1480099583.1741975489&semt=ais_hybrid&w=740", // LED Desk Lamp
        "https://img.freepik.com/premium-photo/power-bank-charges-smartphone-forest-background-bicycle_115838-1234.jpg?uid=R194451028&ga=GA1.1.1480099583.1741975489&semt=ais_hybrid&w=740", // Portable Charger
        "https://img.freepik.com/premium-photo/bike-is-parked-dirt-path-woods_1148406-32253.jpg?uid=R194451028&ga=GA1.1.1480099583.1741975489&semt=ais_hybrid&w=740", //bicyle
        "https://img.freepik.com/premium-photo/uncooked-frozen-small-pizza-placed-into-microwavejunk-foodfast-food-conceptside-viewselective-focus_334782-9162.jpg?uid=R194451028&ga=GA1.1.1480099583.1741975489&semt=ais_hybrid&w=740", // Compact Microwave
        "https://img.freepik.com/free-photo/acoustic-guitar-isolated-white_181624-58107.jpg?uid=R194451028&ga=GA1.1.1480099583.1741975489&semt=ais_hybrid&w=740", // Acoustic Guitar
        "https://img.freepik.com/premium-photo/individual-is-holding-modern-smart-phone-right-front-digital-thermostat-possibly-adjusting-temperature-remotely_561602-2720.jpg?uid=R194451028&ga=GA1.1.1480099583.1741975489&semt=ais_hybrid&w=740", // Smart Thermostat
        "https://img.freepik.com/premium-photo/puzzles-composition-different-concepts-ideas_185193-139344.jpg?uid=R194451028&ga=GA1.1.1480099583.1741975489&semt=ais_hybrid&w=740", // Jigsaw Puzzle Set
        "https://img.freepik.com/premium-photo/restaurant-with-glass-door-that-sayswineon-it_1309173-23636.jpg?uid=R194451028&ga=GA1.1.1480099583.1741975489&semt=ais_hybrid&w=740", // External Monitor
        "https://img.freepik.com/premium-photo/scooter-city-business-woman-going-work-with-electric-vehicle-outdoor-street-mexico-travel-happy-professional-female-corporate-manager-commuting-office-urban-town_590464-101688.jpg?uid=R194451028&ga=GA1.1.1480099583.1741975489&semt=ais_hybrid&w=740", // Electric Scooter
        "https://img.freepik.com/free-photo/woman-with-knitting-tools_23-2148832350.jpg?uid=R194451028&ga=GA1.1.1480099583.1741975489&semt=ais_hybrid&w=740", // Cozy Blanket
        "https://img.freepik.com/premium-photo/man-hand-opened-mini-small-refrigerator-reached-drinking-plastic-water-bottle-wood-counter-hotel-resort-bedroom_39476-5687.jpg?uid=R194451028&ga=GA1.1.1480099583.1741975489&semt=ais_hybrid&w=740", // Mini Fridge
        "https://img.freepik.com/free-photo/arrangement-color-palette-box-empty-notepad_23-2148745579.jpg?uid=R194451028&ga=GA1.1.1480099583.1741975489&semt=ais_hybrid&w=740", // Sketchbook & Pencils
        "https://img.freepik.com/free-photo/working-from-home-ergonomic-workstation_23-2149132345.jpg?uid=R194451028&ga=GA1.1.1480099583.1741975489&semt=ais_hybrid&w=740", // Standing Desk
        "https://img.freepik.com/free-photo/aromatherapy-diffuser_23-2148370747.jpg?uid=R194451028&ga=GA1.1.1480099583.1741975489&semt=ais_hybrid&w=740", // Aromatherapy Diffuser
        "https://img.freepik.com/free-photo/keyboard-with-neon-lights-high-angle_23-2149680226.jpg?uid=R194451028&ga=GA1.1.1480099583.1741975489&semt=ais_hybrid&w=740", // Wireless Keyboard
        "https://img.freepik.com/free-photo/backpack-with-boots-tools-other-items-table_157027-4160.jpg?uid=R194451028&ga=GA1.1.1480099583.1741975489&semt=ais_hybrid&w=740", // Camping Gear Set
        "https://img.freepik.com/premium-psd/digital-photo-frame-displaying-beach-scene_1122354-24075.jpg?uid=R194451028&ga=GA1.1.1480099583.1741975489&semt=ais_hybrid&w=740", // Digital Photo Frame
        "https://img.freepik.com/premium-photo/cordless-vacuum-cleaner-carpet-sofa-space-text_185193-142613.jpg?uid=R194451028&ga=GA1.1.1480099583.1741975489&semt=ais_hybrid&w=740", // Robot Vacuum
        // Location images
        ...Object.values(locations).map((loc) => loc.image),
        // Avatar and other game images
        '/avatars/avatar30.jpg',
        '/avatars/avatar25.jpg',
        '/avatars/avatar24.jpg',
        '/avatars/avatar26.jpg',
        '/avatars/avatar27.jpg',
        '/avatars/avatar32.jpg',
        '/avatars/avatar34.jpg',
        '/avatars/avatar35.jpg',
        '/avatars/avatar38.jpg',
        '/avatars/avatar39.jpg',
        '/avatars/avatar28.jpg',
        '/avatars/avatar21.jpg',
        '/avatars/avatar31.jpg',
        '/avatars/avatar37.jpg',
        '/avatars/avatar40.jpg',
        '/avatars/avatar41.jpg',
        '/avatars/avatar29.jpg',
        '/avatars/avatar17.jpg',
        '/avatars/avatar15.jpg',
        '/avatars/avatar16.jpg',
        '/avatars/avatar19.jpg',
        '/avatars/avatar42.jpg',
        '/avatars/avatar33.jpg',
        '/avatars/avatar36.jpg',
        '/avatars/person.jpg',
        '/avatars/sexygirl.jpg',
        '/avatars/sexygirl1.jpg',
        '/avatars/sexygirl2.jpg',
        '/avatars/sexygirl3.jpg',
        '/avatars/sexygirl4.jpg',
        '/avatars/sexyguy1.jpg',
        '/avatars/sexyguy2.jpg',
        '/avatars/sexyguy.jpg',
        '/avatars/sexyguy3.jpg',
        '/avatars/sexyguy4.jpg',
        "/professor.jpg",
        "/boss.jpg",
        "/gaming.jpg",
        "/bg.jpg",
        "/datingoffice.jpg",
        "/grass.jpg",
        "/header.jpg",
        "/home.jpg",
        "/home2.jpg",
        "/home3.jpg",
        "/home4.jpg",
        "/logo2.jpg",
        "/meditate.jpg",
        "/stone.png",
    ], []);

    const audioUrls = useMemo(() => [
        "/sounds/click.mp3",
        "/sounds/apartment.mp3",
        "/sounds/bankmusic.mp3",
        "/sounds/css.mp3",
        "/sounds/datingmusic.mp3",
        "/sounds/fastfood.mp3",
        "/sounds/gaming.mp3",
        "/sounds/healing.mp3",
        "/sounds/healing2.mp3",
        "/sounds/java.mp3",
        "/sounds/javascript.mp3",
        "/sounds/leisuresound.mp3",
        "/sounds/mallmusic.mp3",
        "/sounds/nextjs.mp3",
        "/sounds/pythonmusic.mp3",
        "/sounds/reactn.mp3",
        "/sounds/type.mp3",
        "/sounds/universitymusic.mp3",
        "/sounds/walk.mp3",
        "/sounds/workmusic.mp3",
    ], []);

    const videoUrls = useMemo(() => [
        // Background videos for locations
        "https://cdn.pixabay.com/video/2023/08/24/177572-857741629_tiny.mp4", // ReactNativeUniversity
        "https://cdn.pixabay.com/video/2016/09/21/5364-183788428_tiny.mp4", // JavaResort, University
        "https://cdn.pixabay.com/video/2020/09/04/49050-459186396_tiny.mp4", // GamingHotel
        "https://cdn.pixabay.com/video/2022/08/27/129247-743827327_tiny.mp4", // RentalOffice
        "https://cdn.pixabay.com/video/2021/04/24/72025-543403489_tiny.mp4", // FastFood
        "/videos/workplacevideo.mp4", // Mall
        "/videos/universityvideo.mp4", // CSharpHotel
        "/videos/gaming.mp4", // GamingHotel (alternative)
        "/videos/apartment.mp4", // Apartment
        // Professor videos from ProfessorHeader
        "https://videos.pexels.com/video-files/3252126/3252126-sd_640_360_25fps.mp4", // React
        "https://videos.pexels.com/video-files/7968376/7968376-sd_960_506_25fps.mp4", // React Native
        "https://videos.pexels.com/video-files/5763899/5763899-sd_360_640_24fps.mp4", // CSS
        "https://videos.pexels.com/video-files/8264022/8264022-sd_360_640_25fps.mp4", // Next.js
        "https://videos.pexels.com/video-files/7968372/7968372-uhd_2732_1440_25fps.mp4", // JavaScript
        "https://videos.pexels.com/video-files/5676140/5676140-sd_640_360_25fps.mp4", // Python
        "https://videos.pexels.com/video-files/7583723/7583723-sd_640_360_25fps.mp4", // TypeScript
        "https://videos.pexels.com/video-files/6269216/6269216-uhd_2560_1440_24fps.mp4", // Express
        "https://videos.pexels.com/video-files/15958462/15958462-sd_640_360_30fps.mp4", // C#
        "https://videos.pexels.com/video-files/7989531/7989531-sd_640_360_25fps.mp4", // Java
        "https://videos.pexels.com/video-files/4629795/4629795-sd_640_360_25fps.mp4", // GameDev
    ], []);

    // Initialize audio and preload all location music
    useEffect(() => {
        audioManager.loadWorkMusic("/sounds/workmusic.mp3").then((success) => {
            if (!success) console.warn("Failed to load work music");
        });
        audioManager.loadHomeMusic("/sounds/apartment.mp3").then((success) => {
            if (!success) console.warn("Failed to load home music");
        });
        audioManager.loadBankMusic("/sounds/bankmusic.mp3").then((success) => {
            if (!success) console.warn("Failed to load home music");
        });
        audioManager.loadMallMusic("/sounds/mallmusic.mp3").then((success) => {
            if (!success) console.warn("Failed to load mall music");
        });
        audioManager.loadFastFoodMusic("/sounds/fastfood.mp3").then((success) => {
            if (!success) console.warn("Failed to load fast food music");
        });
        audioManager.loadDatingOfficeMusic("/sounds/datingmusic.mp3").then((success) => {
            if (!success) console.warn("Failed to load dating office music");
        });
        audioManager.loadUniversityMusic("/sounds/universitymusic.mp3").then((success) => {
            if (!success) console.warn("Failed to load university music");
        });
        audioManager.loadNextJsHotelMusic("/sounds/nextjs.mp3").then((success) => {
            if (!success) console.warn("Failed to load NextJs hotel music");
        });
        audioManager.loadCssHotelMusic("/sounds/css.mp3").then((success) => {
            if (!success) console.warn("Failed to load CSS hotel music");
        });
        audioManager.loadPythonHotelMusic("/sounds/pythonmusic.mp3").then((success) => {
            if (!success) console.warn("Failed to load Python hotel music");
        });
        audioManager.loadJavaScriptHotelMusic("/sounds/javascript.mp3").then((success) => {
            if (!success) console.warn("Failed to load JavaScript hotel music");
        });
        audioManager.loadTypeScriptHolidayResortMusic("/sounds/type.mp3").then((success) => {
            if (!success) console.warn("Failed to load TypeScript holiday resort music");
        });
        audioManager.loadExpressHotelMusic("/sounds/healing.mp3").then((success) => {
            if (!success) console.warn("Failed to load Express hotel music");
        });
        audioManager.loadCSharpHotelMusic("/sounds/healing2.mp3").then((success) => {
            if (!success) console.warn("Failed to load C# hotel music");
        });
        audioManager.loadReactNativeMusic("/sounds/reactn.mp3").then((success) => {
            if (!success) console.warn("Failed to load React Native music");
        });
        audioManager.loadJavaResortMusic("/sounds/java.mp3").then((success) => {
            if (!success) console.warn("Failed to load Java resort music");
        });
        audioManager.loadGamingHotelMusic("/sounds/gaming.mp3").then((success) => {
            if (!success) console.warn("Failed to load gaming hotel music");
        });
        audioManager.loadClickSound("/sounds/click.mp3").then((success) => {
            if (!success) console.warn("Failed to load click sound");
        });
        audioManager.loadWalkingSound("/sounds/walk.mp3").then((success) => {
            if (!success) console.warn("Failed to load walking sound");
        });
        return () => {
            audioManager.stopAllMusic();
            console.log("Stopped all music on unmount");
        };
    }, []);

    // Define which screens have music and their corresponding play functions
    const audioMap = {
        map: () => {
            if (isWalking) {
                audioManager.playWalkingSound();
                console.log("Playing walking sound on map");
            } else {
                audioManager.stopWalkingSound();
                console.log("Stopped walking sound on map");
            }
        },
        location: () => {
            if (player.currentLocation && midTierLocations.includes(player.currentLocation)) {
                audioManager.playLeisureMusic();
                console.log(`Playing leisure music for ${player.currentLocation}`);
            } else {
                audioManager.stopLeisureMusic();
                console.log(`No leisure music for ${player.currentLocation}`);
            }
        },
        rentOffice: audioManager.playBankMusic,
        devWork: audioManager.playWorkMusic,
        apartment: audioManager.playHomeMusic,
        mall: audioManager.playMallMusic,
        fastFood: audioManager.playFastFoodMusic,
        datingOffice: audioManager.playDatingOfficeMusic,
        university: audioManager.playUniversityMusic,
        nextJsSchool: audioManager.playNextJsHotelMusic,
        cssHotel: audioManager.playCssHotelMusic,
        pythonHotel: audioManager.playPythonHotelMusic,
        javaScriptHotel: audioManager.playJavaScriptHotelMusic,
        typeScriptHolidayResort: audioManager.playTypeScriptHolidayResortMusic,
        expressHotel: audioManager.playExpressHotelMusic,
        cSharpHotel: audioManager.playCSharpHotelMusic,
        reactNativeUniversity: audioManager.playReactNativeMusic,
        javaResort: audioManager.playJavaResortMusic,
        gamingHotel: audioManager.playGamingHotelMusic,
    };

    // Play music based on currentScreen and isWalking
    useEffect(() => {
        audioManager.stopAllMusic();
        if (audioMap[currentScreen]) {
            audioMap[currentScreen]();
            console.log(`Playing audio for screen: ${currentScreen}`);
        } else {
            console.log(`No audio for screen: ${currentScreen}`);
        }
        return () => {
            audioManager.stopAllMusic();
            console.log("Stopped all music on screen change");
        };
    }, [currentScreen, isWalking]);

    // Preload assets with Promise.all
    useEffect(() => {
        const preloadAssets = async () => {
            // Preload images
            const imagePromises = imageUrls.map((url) => {
                return new Promise((resolve) => {
                    const img = new Image();
                    img.src = url;
                    img.onload = () => resolve({ status: 'fulfilled', value: url });
                    img.onerror = () => {
                        console.warn(`Failed to load image: ${url}`);
                        resolve({ status: 'rejected', reason: url });
                    };
                });
            });

            // Preload audio
            const audioPromises = audioUrls.map((url) => {
                return new Promise((resolve) => {
                    const audio = new Audio(url);
                    audio.preload = "auto";
                    audio.onloadeddata = () => resolve({ status: 'fulfilled', value: url });
                    audio.onerror = () => {
                        console.warn(`Failed to load audio: ${url}`);
                        resolve({ status: 'rejected', reason: url });
                    };
                });
            });

            // Preload videos
            const videoPromises = videoUrls.map((url) => {
                return new Promise((resolve) => {
                    const video = document.createElement("video");
                    video.src = url;
                    video.preload = "auto";
                    video.muted = true;
                    video.onloadeddata = () => resolve({ status: 'fulfilled', value: url });
                    video.onerror = () => {
                        console.warn(`Failed to load video: ${url}`);
                        resolve({ status: 'rejected', reason: url });
                    };
                });
            });

            try {
                const results = await Promise.all([...imagePromises, ...audioPromises, ...videoPromises]);
                const failedAssets = results.filter(result => result.status === 'rejected');
                if (failedAssets.length > 0) {
                    console.warn("Some assets failed to load:", failedAssets.map(r => r.reason));
                }
                console.log("All assets preloaded successfully");
                setIsAssetsLoaded(true);
            } catch (error) {
                console.error("Failed to preload some assets:", error);
                setIsAssetsLoaded(true); // Proceed anyway to avoid blocking
            }
        };

        preloadAssets();
    }, [imageUrls, audioUrls, videoUrls]);

    // Preload dynamic player avatar
    useEffect(() => {
        if (player && player.avatar) {
            const img = new Image();
            img.src = player.avatar;
        }
    }, [player?.avatar]);

    useEffect(() => {
        if (!player || isPlayerSelect || gameWon || gameEnded) return;
        if (hasWon(player) && !gameWon) {
            dispatch({ type: "SET_GAME_WON" });
            dispatch({
                type: "SET_MESSAGE",
                payload: { text: "Congratulations! You've achieved all goals and won the game!" },
            });
        }
    }, [player, gameWon, isPlayerSelect, gameEnded, dispatch]);

    useEffect(() => {
        dispatch({ type: "SET_MESSAGE", payload: { text: "Welcome to the game!" } });
    }, [dispatch]);

    useEffect(() => {
        const checkStuckState = () => {
            if (!player) return;
            const minEnergyForActions = 20;
            const canRestAtHome = player.currentLocation === "apartment";
            if (player.energy < 10 && player.energy < minEnergyForActions && !canRestAtHome) {
                dispatch({ type: "ADVANCE_WEEK_AND_REST" });
            }
        };
        const interval = setInterval(checkStuckState, 30000);
        return () => clearInterval(interval);
    }, [dispatch, player?.energy, player?.currentLocation]);

    if (isPlayerSelect || !player || !player.name || !player.avatar) {
        return <PlayerSelect />;
    }

    if (gameWon) {
        return <GameOver won={true} />;
    }

    return (
        <motion.div
            className="min-h-full h-auto max-w-7xl mx-auto relative gradient-background2 px-5 rounded-lg p-10 flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <AnimatePresence>
                <Header key="header" />
                <MessageArea key="message-area" message={message} />
                <div key={currentScreen} className="w-full">
                    {currentScreen === "map" && <Map />}
                    {currentScreen === "location" && <LocationDetail />}
                    {currentScreen === "university" && <University />}
                    {currentScreen === "rentOffice" && <RentalOffice />}
                    {currentScreen === "nextJsSchool" && <NextJs />}
                    {currentScreen === "stats" && <Stats />}
                    {currentScreen === "goals" && <GoalsTracker />}
                    {currentScreen === "fastFood" && <FastFood />}
                    {currentScreen === "cssHotel" && <CssHotel />}
                    {currentScreen === "cSharpHotel" && <CSharpHotel />}
                    {currentScreen === "pythonHotel" && <PythonHotel />}
                    {currentScreen === "reactNativeUniversity" && <ReactNativeUniversity />}
                    {currentScreen === "javaScriptHotel" && <JavaScriptHotel />}
                    {currentScreen === "typeScriptHolidayResort" && <TypeScriptHolidayResort />}
                    {currentScreen === "expressHotel" && <ExpressHotel />}
                    {currentScreen === "javaResort" && <JavaResort />}
                    {currentScreen === "gamingHotel" && <GamingHotel />}
                    {currentScreen === "apartment" && <Apartment />}
                    {currentScreen === "mall" && <Mall />}
                    {currentScreen === "devWork" && <Devwork />}
                    {currentScreen === "datingOffice" && <DatingOffice />}
                    {currentScreen === "saveload" && <SaveLoadMenu />}
                </div>
            </AnimatePresence>
        </motion.div>
    );
}