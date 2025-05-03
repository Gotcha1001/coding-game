export const cppData = {
  gameBasics: {
    title: "C++ Game Basics",
    description:
      "Learn the fundamentals of coding games using C++ with the SDL library.",
    pages: [
      {
        title: "Setting Up SDL",
        content: `
# Setting Up SDL

SDL (Simple DirectMedia Layer) is a popular library for creating 2D games in C++.

\`\`\`cpp
#include <SDL2/SDL.h>
int main(int argc, char* argv[]) {
    SDL_Init(SDL_INIT_VIDEO);
    SDL_Window* window = SDL_CreateWindow(
        "Game", SDL_WINDOWPOS_CENTERED, SDL_WINDOWPOS_CENTERED,
        800, 600, SDL_WINDOW_SHOWN
    );
    SDL_Renderer* renderer = SDL_CreateRenderer(window, -1, 0);
    SDL_Delay(2000); // Wait 2 seconds
    SDL_DestroyRenderer(renderer);
    SDL_DestroyWindow(window);
    SDL_Quit();
    return 0;
}
\`\`\`

Key concepts:
- **SDL_Init**: Initializes SDL subsystems.
- **SDL_Window**: Creates a window.
- **SDL_Renderer**: Handles rendering graphics.
        `,
      },
      {
        title: "Game Loop",
        content: `
# Game Loop

The game loop updates the game state and renders graphics each frame.

\`\`\`cpp
#include <SDL2/SDL.h>
int main(int argc, char* argv[]) {
    SDL_Init(SDL_INIT_VIDEO);
    SDL_Window* window = SDL_CreateWindow(
        "Game", SDL_WINDOWPOS_CENTERED, SDL_WINDOWPOS_CENTERED,
        800, 600, SDL_WINDOW_SHOWN
    );
    SDL_Renderer* renderer = SDL_CreateRenderer(window, -1, 0);
    bool running = true;
    SDL_Event event;
    while (running) {
        while (SDL_PollEvent(&event)) {
            if (event.type == SDL_QUIT) running = false;
        }
        SDL_SetRenderDrawColor(renderer, 0, 0, 0, 255);
        SDL_RenderClear(renderer);
        SDL_RenderPresent(renderer);
    }
    SDL_DestroyRenderer(renderer);
    SDL_DestroyWindow(window);
    SDL_Quit();
    return 0;
}
\`\`\`

Key components:
- **SDL_PollEvent**: Handles input (e.g., closing the window).
- **SDL_RenderClear**: Clears the screen.
- **SDL_RenderPresent**: Updates the display.
        `,
      },
      {
        title: "Rendering Sprites",
        content: `
# Rendering Sprites

Sprites are 2D images rendered on the screen, like characters or objects.

\`\`\`cpp
#include <SDL2/SDL.h>
#include <SDL2/SDL_image.h>
int main(int argc, char* argv[]) {
    SDL_Init(SDL_INIT_VIDEO);
    IMG_Init(IMG_INIT_PNG);
    SDL_Window* window = SDL_CreateWindow(
        "Game", SDL_WINDOWPOS_CENTERED, SDL_WINDOWPOS_CENTERED,
        800, 600, SDL_WINDOW_SHOWN
    );
    SDL_Renderer* renderer = SDL_CreateRenderer(window, -1, 0);
    SDL_Surface* surface = IMG_Load("sprite.png");
    SDL_Texture* texture = SDL_CreateTextureFromSurface(renderer, surface);
    SDL_Rect rect = {100, 100, 64, 64}; // x, y, width, height
    SDL_RenderCopy(renderer, texture, NULL, &rect);
    SDL_RenderPresent(renderer);
    SDL_Delay(2000);
    SDL_DestroyTexture(texture);
    SDL_FreeSurface(surface);
    SDL_DestroyRenderer(renderer);
    SDL_DestroyWindow(window);
    IMG_Quit();
    SDL_Quit();
    return 0;
}
\`\`\`

Tips:
- Use **SDL_image** for loading PNGs.
- **SDL_Rect**: Defines sprite position and size.
- Keep textures small for performance.
        `,
      },
    ],
    quiz: [
      {
        question: "What function initializes SDL subsystems?",
        options: ["SDL_Start()", "SDL_Init()", "SDL_Begin()", "SDL_Create()"],
        answer: 1,
      },
      {
        question: "What does SDL_PollEvent do in the game loop?",
        options: [
          "Renders graphics",
          "Handles user input",
          "Clears the screen",
          "Updates the display",
        ],
        answer: 1,
      },
      {
        question: "Which library is used to load PNG images in SDL?",
        options: ["SDL_ttf", "SDL_mixer", "SDL_image", "SDL_gfx"],
        answer: 2,
      },
    ],
  },
  physicsSimulation: {
    title: "Physics Simulation",
    description: "Learn to implement physics in games using C++ and SDL.",
    pages: [
      {
        title: "Basic Physics Concepts",
        content: `
# Basic Physics Concepts

Physics simulation in games involves modeling motion, gravity, and collisions.

\`\`\`cpp
#include <SDL2/SDL.h>
struct Vector2 {
    float x, y;
};
struct Object {
    Vector2 position;
    Vector2 velocity;
    float mass;
};
void updatePhysics(Object& obj, float dt) {
    obj.position.x += obj.velocity.x * dt;
    obj.position.y += obj.velocity.y * dt;
    obj.velocity.y += 9.8f * dt; // Gravity
}
\`\`\`

Key concepts:
- **Vector2**: Represents 2D position or velocity.
- **Gravity**: Applied as a constant downward acceleration.
- **Time Step (dt)**: Controls simulation accuracy.
        `,
      },
    ],
    quiz: [
      {
        question:
          "What is the typical gravitational acceleration used in game physics?",
        options: ["5.4 m/s²", "9.8 m/s²", "12.3 m/s²", "7.2 m/s²"],
        answer: 1,
      },
    ],
  },
  inputHandling: {
    title: "Input Handling",
    description: "Learn to process user input in C++ games using SDL.",
    pages: [
      {
        title: "Keyboard Input",
        content: `
# Keyboard Input

SDL allows you to handle keyboard input for game controls.

\`\`\`cpp
#include <SDL2/SDL.h>
int main(int argc, char* argv[]) {
    SDL_Init(SDL_INIT_VIDEO);
    SDL_Window* window = SDL_CreateWindow(
        "Game", SDL_WINDOWPOS_CENTERED, SDL_WINDOWPOS_CENTERED,
        800, 600, SDL_WINDOW_SHOWN
    );
    SDL_Renderer* renderer = SDL_CreateRenderer(window, -1, 0);
    bool running = true;
    SDL_Event event;
    while (running) {
        while (SDL_PollEvent(&event)) {
            if (event.type == SDL_QUIT) running = false;
            if (event.type == SDL_KEYDOWN) {
                if (event.key.keysym.sym == SDLK_SPACE) {
                    // Handle spacebar press
                }
            }
        }
        SDL_RenderClear(renderer);
        SDL_RenderPresent(renderer);
    }
    SDL_DestroyRenderer(renderer);
    SDL_DestroyWindow(window);
    SDL_Quit();
    return 0;
}
\`\`\`

Key components:
- **SDL_KEYDOWN**: Detects key presses.
- **keysym.sym**: Identifies the pressed key.
- **SDL_PollEvent**: Processes all input events.
        `,
      },
    ],
    quiz: [
      {
        question: "Which SDL event type is used to detect key presses?",
        options: ["SDL_KEYUP", "SDL_KEYDOWN", "SDL_KEYPRESS", "SDL_KEYRELEASE"],
        answer: 1,
      },
    ],
  },
  collisionDetection: {
    title: "Collision Detection",
    description: "Learn collision detection techniques for C++ games.",
    pages: [
      {
        title: "Bounding Box Collision",
        content: `
# Bounding Box Collision

Bounding box collision checks if two rectangles overlap.

\`\`\`cpp
#include <SDL2/SDL.h>
bool checkCollision(SDL_Rect a, SDL_Rect b) {
    return (a.x < b.x + b.w &&
            a.x + a.w > b.x &&
            a.y < b.y + b.h &&
            a.y + a.h > b.y);
}
int main(int argc, char* argv[]) {
    SDL_Init(SDL_INIT_VIDEO);
    SDL_Window* window = SDL_CreateWindow(
        "Game", SDL_WINDOWPOS_CENTERED, SDL_WINDOWPOS_CENTERED,
        800, 600, SDL_WINDOW_SHOWN
    );
    SDL_Renderer* renderer = SDL_CreateRenderer(window, -1, 0);
    SDL_Rect player = {100, 100, 50, 50};
    SDL_Rect obstacle = {200, 200, 50, 50};
    if (checkCollision(player, obstacle)) {
        // Handle collision
    }
    SDL_Delay(2000);
    SDL_DestroyRenderer(renderer);
    SDL_DestroyWindow(window);
    SDL_Quit();
    return 0;
}
\`\`\`

Tips:
- **SDL_Rect**: Defines rectangle position and size.
- **Overlap Check**: Ensures all conditions for collision are met.
- Keep rectangles aligned for accurate detection.
        `,
      },
    ],
    quiz: [
      {
        question: "What does a bounding box collision check verify?",
        options: [
          "If circles overlap",
          "If rectangles overlap",
          "If lines intersect",
          "If points are close",
        ],
        answer: 1,
      },
    ],
  },
  variables: {
    title: "C++ Variables",
    description:
      "Learn how to declare and use variables in C++ for game development.",
    pages: [
      {
        title: "Introduction to Variables",
        content: `
# Introduction to Variables

Variables store data such as numbers, characters, or objects in C++.

\`\`\`cpp
#include <SDL2/SDL.h>
int main(int argc, char* argv[]) {
    int playerScore = 0;
    float playerSpeed = 5.5f;
    bool isGameOver = false;
    SDL_Init(SDL_INIT_VIDEO);
    SDL_Window* window = SDL_CreateWindow(
        "Game", SDL_WINDOWPOS_CENTERED, SDL_WINDOWPOS_CENTERED,
        800, 600, SDL_WINDOW_SHOWN
    );
    playerScore += 100; // Update score
    SDL_Delay(2000);
    SDL_DestroyWindow(window);
    SDL_Quit();
    return 0;
}
\`\`\`

Key concepts:
- **Declaration**: Specify type (e.g., int, float, bool).
- **Initialization**: Assign an initial value.
- **Scope**: Variables are accessible within their defined block.
        `,
      },
    ],
    quiz: [
      {
        question: "Which keyword declares a floating-point variable in C++?",
        options: ["int", "float", "bool", "char"],
        answer: 1,
      },
    ],
  },
  functions: {
    title: "C++ Functions",
    description:
      "Master functions in C++ for reusable code in game development.",
    pages: [
      {
        title: "Introduction to Functions",
        content: `
# Introduction to Functions

Functions are reusable blocks of code that perform specific tasks.

\`\`\`cpp
#include <SDL2/SDL.h>
void drawRectangle(SDL_Renderer* renderer, int x, int y, int w, int h) {
    SDL_Rect rect = {x, y, w, h};
    SDL_SetRenderDrawColor(renderer, 255, 0, 0, 255);
    SDL_RenderFillRect(renderer, &rect);
}
int main(int argc, char* argv[]) {
    SDL_Init(SDL_INIT_VIDEO);
    SDL_Window* window = SDL_CreateWindow(
        "Game", SDL_WINDOWPOS_CENTERED, SDL_WINDOWPOS_CENTERED,
        800, 600, SDL_WINDOW_SHOWN
    );
    SDL_Renderer* renderer = SDL_CreateRenderer(window, -1, 0);
    drawRectangle(renderer, 100, 100, 50, 50);
    SDL_RenderPresent(renderer);
    SDL_Delay(2000);
    SDL_DestroyRenderer(renderer);
    SDL_DestroyWindow(window);
    SDL_Quit();
    return 0;
}
\`\`\`

Key concepts:
- **Declaration**: Specify return type and parameters.
- **Call**: Invoke the function with arguments.
- **Modularity**: Functions organize code for reuse.
        `,
      },
    ],
    quiz: [
      {
        question: "What does a function's return type specify?",
        options: [
          "The input type",
          "The output type",
          "The function name",
          "The parameter count",
        ],
        answer: 1,
      },
    ],
  },
  classes: {
    title: "C++ Classes",
    description: "Learn object-oriented programming in C++ for game entities.",
    pages: [
      {
        title: "Introduction to Classes",
        content: `
# Introduction to Classes

Classes define blueprints for objects with data and behavior.

\`\`\`cpp
#include <SDL2/SDL.h>
class Player {
public:
    int x, y;
    Player(int startX, int startY) : x(startX), y(startY) {}
    void move(int dx, int dy) {
        x += dx;
        y += dy;
    }
};
int main(int argc, char* argv[]) {
    SDL_Init(SDL_INIT_VIDEO);
    SDL_Window* window = SDL_CreateWindow(
        "Game", SDL_WINDOWPOS_CENTERED, SDL_WINDOWPOS_CENTERED,
        800, 600, SDL_WINDOW_SHOWN
    );
    Player player(100, 100);
    player.move(10, 20);
    SDL_Delay(2000);
    SDL_DestroyWindow(window);
    SDL_Quit();
    return 0;
}
\`\`\`

Key concepts:
- **Class**: Defines properties and methods.
- **Constructor**: Initializes objects.
- **Encapsulation**: Bundles data and behavior.
        `,
      },
    ],
    quiz: [
      {
        question: "What is the purpose of a constructor in a C++ class?",
        options: [
          "To delete objects",
          "To initialize objects",
          "To call methods",
          "To define variables",
        ],
        answer: 1,
      },
    ],
  },
  pointers: {
    title: "C++ Pointers",
    description:
      "Understand pointers in C++ for dynamic memory management in games.",
    pages: [
      {
        title: "Introduction to Pointers",
        content: `
# Introduction to Pointers

Pointers store memory addresses of variables or objects.

\`\`\`cpp
#include <SDL2/SDL.h>
int main(int argc, char* argv[]) {
    int score = 100;
    int* scorePtr = &score;
    *scorePtr += 50; // Modify score via pointer
    SDL_Init(SDL_INIT_VIDEO);
    SDL_Window* window = SDL_CreateWindow(
        "Game", SDL_WINDOWPOS_CENTERED, SDL_WINDOWPOS_CENTERED,
        800, 600, SDL_WINDOW_SHOWN
    );
    SDL_Renderer* renderer = SDL_CreateRenderer(window, -1, 0);
    SDL_Delay(2000);
    SDL_DestroyRenderer(renderer);
    SDL_DestroyWindow(window);
    SDL_Quit();
    return 0;
}
\`\`\`

Key concepts:
- **Address (&)**: Gets the memory address of a variable.
- **Dereference (*)**: Accesses the value at the address.
- **Null Pointer**: Points to no valid memory.
        `,
      },
    ],
    quiz: [
      {
        question: "What does the `&` operator do in C++?",
        options: [
          "Dereferences a pointer",
          "Gets the memory address",
          "Multiplies values",
          "Creates a pointer",
        ],
        answer: 1,
      },
    ],
  },
  dynamicMemory: {
    title: "C++ Dynamic Memory",
    description:
      "Learn dynamic memory allocation in C++ for flexible game objects.",
    pages: [
      {
        title: "Using new and delete",
        content: `
# Using new and delete

Dynamic memory allows allocating objects at runtime.

\`\`\`cpp
#include <SDL2/SDL.h>
struct Enemy {
    int x, y;
};
int main(int argc, char* argv[]) {
    SDL_Init(SDL_INIT_VIDEO);
    SDL_Window* window = SDL_CreateWindow(
        "Game", SDL_WINDOWPOS_CENTERED, SDL_WINDOWPOS_CENTERED,
        800, 600, SDL_WINDOW_SHOWN
    );
    Enemy* enemy = new Enemy{100, 200};
    delete enemy; // Free memory
    SDL_Delay(2000);
    SDL_DestroyWindow(window);
    SDL_Quit();
    return 0;
}
\`\`\`

Key concepts:
- **new**: Allocates memory on the heap.
- **delete**: Frees allocated memory.
- **Memory Leak**: Forgetting to delete allocated memory.
        `,
      },
    ],
    quiz: [
      {
        question: "What does the `new` operator do in C++?",
        options: [
          "Frees memory",
          "Allocates memory",
          "Declares a variable",
          "Calls a function",
        ],
        answer: 1,
      },
    ],
  },
  templates: {
    title: "C++ Templates",
    description: "Master templates in C++ for generic programming in games.",
    pages: [
      {
        title: "Introduction to Templates",
        content: `
# Introduction to Templates

Templates allow writing generic code for different data types.

\`\`\`cpp
#include <SDL2/SDL.h>
template<typename T>
T clamp(T value, T min, T max) {
    if (value < min) return min;
    if (value > max) return max;
    return value;
}
int main(int argc, char* argv[]) {
    SDL_Init(SDL_INIT_VIDEO);
    SDL_Window* window = SDL_CreateWindow(
        "Game", SDL_WINDOWPOS_CENTERED, SDL_WINDOWPOS_CENTERED,
        800, 600, SDL_WINDOW_SHOWN
    );
    int playerX = clamp(150, 0, 800); // Restrict to screen
    float speed = clamp(10.5f, 0.0f, 20.0f);
    SDL_Delay(2000);
    SDL_DestroyWindow(window);
    SDL_Quit();
    return 0;
}
\`\`\`

Key concepts:
- **template<typename T>**: Defines a generic type.
- **Instantiation**: Compiler generates code for specific types.
- **Reusability**: Works with any compatible type.
        `,
      },
    ],
    quiz: [
      {
        question: "What is the purpose of a C++ template?",
        options: [
          "To define a class",
          "To write generic code",
          "To handle exceptions",
          "To allocate memory",
        ],
        answer: 1,
      },
    ],
  },
  stateManagement: {
    title: "C++ State Management",
    description: "Learn to manage game states in C++ for smooth transitions.",
    pages: [
      {
        title: "Basic State Machine",
        content: `
# Basic State Machine

A state machine manages different game states (e.g., menu, playing).

\`\`\`cpp
#include <SDL2/SDL.h>
enum class GameState { MENU, PLAYING, PAUSED };
int main(int argc, char* argv[]) {
    SDL_Init(SDL_INIT_VIDEO);
    SDL_Window* window = SDL_CreateWindow(
        "Game", SDL_WINDOWPOS_CENTERED, SDL_WINDOWPOS_CENTERED,
        800, 600, SDL_WINDOW_SHOWN
    );
    SDL_Renderer* renderer = SDL_CreateRenderer(window, -1, 0);
    GameState state = GameState::MENU;
    bool running = true;
    SDL_Event event;
    while (running) {
        while (SDL_PollEvent(&event)) {
            if (event.type == SDL_QUIT) running = false;
            if (event.type == SDL_KEYDOWN && event.key.keysym.sym == SDLK_p) {
                state = (state == GameState::PLAYING) ? GameState::PAUSED : GameState::PLAYING;
            }
        }
        SDL_SetRenderDrawColor(renderer, 0, 0, 0, 255);
        SDL_RenderClear(renderer);
        SDL_RenderPresent(renderer);
    }
    SDL_DestroyRenderer(renderer);
    SDL_DestroyWindow(window);
    SDL_Quit();
    return 0;
}
\`\`\`

Key concepts:
- **enum class**: Defines states safely.
- **State Transitions**: Change states based on input.
- **Modularity**: Each state handles specific logic.
        `,
      },
    ],
    quiz: [
      {
        question: "What does a state machine manage in a game?",
        options: [
          "Memory allocation",
          "Different game states",
          "Physics calculations",
          "Sprite rendering",
        ],
        answer: 1,
      },
    ],
  },
  animation: {
    title: "C++ Animation",
    description: "Learn to implement sprite animations in C++ games using SDL.",
    pages: [
      {
        title: "Sprite Sheet Animation",
        content: `
# Sprite Sheet Animation

Animations use sprite sheets to display sequences of frames.

\`\`\`cpp
#include <SDL2/SDL.h>
#include <SDL2/SDL_image.h>
struct Animation {
    SDL_Texture* texture;
    int frameWidth, frameHeight, frameCount;
    int currentFrame = 0;
    void update() { currentFrame = (currentFrame + 1) % frameCount; }
};
int main(int argc, char* argv[]) {
    SDL_Init(SDL_INIT_VIDEO);
    IMG_Init(IMG_INIT_PNG);
    SDL_Window* window = SDL_CreateWindow(
        "Game", SDL_WINDOWPOS_CENTERED, SDL_WINDOWPOS_CENTERED,
        800, 600, SDL_WINDOW_SHOWN
    );
    SDL_Renderer* renderer = SDL_CreateRenderer(window, -1, 0);
    SDL_Surface* surface = IMG_Load("spritesheet.png");
    Animation anim = {SDL_CreateTextureFromSurface(renderer, surface), 64, 64, 4};
    SDL_Rect src = {0, 0, 64, 64};
    SDL_Rect dst = {100, 100, 64, 64};
    bool running = true;
    while (running) {
        SDL_Event event;
        while (SDL_PollEvent(&event)) {
            if (event.type == SDL_QUIT) running = false;
        }
        anim.update();
        src.x = anim.currentFrame * anim.frameWidth;
        SDL_RenderCopy(renderer, anim.texture, &src, &dst);
        SDL_RenderPresent(renderer);
        SDL_Delay(100); // Frame delay
    }
    SDL_DestroyTexture(anim.texture);
    SDL_FreeSurface(surface);
    SDL_DestroyRenderer(renderer);
    SDL_DestroyWindow(window);
    IMG_Quit();
    SDL_Quit();
    return 0;
}
\`\`\`

Key concepts:
- **Sprite Sheet**: Single image with multiple frames.
- **Frame Update**: Cycle through frames for animation.
- **SDL_Rect**: Selects and renders specific frames.
        `,
      },
    ],
    quiz: [
      {
        question: "What is a sprite sheet used for in game animation?",
        options: [
          "Storing single images",
          "Displaying multiple frames",
          "Handling input",
          "Managing states",
        ],
        answer: 1,
      },
    ],
  },
  audioHandling: {
    title: "C++ Audio Handling",
    description:
      "Learn to add sound effects and music to C++ games using SDL_mixer.",
    pages: [
      {
        title: "Playing Sound Effects",
        content: `
# Playing Sound Effects

SDL_mixer enables loading and playing audio files like WAV for sound effects.

\`\`\`cpp
#include <SDL2/SDL.h>
#include <SDL2/SDL_mixer.h>
int main(int argc, char* argv[]) {
    SDL_Init(SDL_INIT_VIDEO | SDL_INIT_AUDIO);
    Mix_Init(MIX_INIT_WAVPACK);
    Mix_OpenAudio(44100, MIX_DEFAULT_FORMAT, 2, 2048);
    SDL_Window* window = SDL_CreateWindow(
        "Game", SDL_WINDOWPOS_CENTERED, SDL_WINDOWPOS_CENTERED,
        800, 600, SDL_WINDOW_SHOWN
    );
    SDL_Renderer* renderer = SDL_CreateRenderer(window, -1, 0);
    Mix_Chunk* sound = Mix_LoadWAV("effect.wav");
    bool running = true;
    SDL_Event event;
    while (running) {
        while (SDL_PollEvent(&event)) {
            if (event.type == SDL_QUIT) running = false;
            if (event.type == SDL_KEYDOWN && event.key.keysym.sym == SDLK_s) {
                Mix_PlayChannel(-1, sound, 0);
            }
        }
        SDL_SetRenderDrawColor(renderer, 0, 0, 0, 255);
        SDL_RenderClear(renderer);
        SDL_RenderPresent(renderer);
    }
    Mix_FreeChunk(sound);
    Mix_CloseAudio();
    Mix_Quit();
    SDL_DestroyRenderer(renderer);
    SDL_DestroyWindow(window);
    SDL_Quit();
    return 0;
}
\`\`\`

Key concepts:
- **Mix_Init**: Initializes SDL_mixer for audio formats.
- **Mix_LoadWAV**: Loads WAV files for sound effects.
- **Mix_PlayChannel**: Plays a sound effect on an available channel.
        `,
      },
      {
        title: "Playing Background Music",
        content: `
# Playing Background Music

SDL_mixer supports looping background music with formats like MP3.

\`\`\`cpp
#include <SDL2/SDL.h>
#include <SDL2/SDL_mixer.h>
int main(int argc, char* argv[]) {
    SDL_Init(SDL_INIT_VIDEO | SDL_INIT_AUDIO);
    Mix_Init(MIX_INIT_MP3);
    Mix_OpenAudio(44100, MIX_DEFAULT_FORMAT, 2, 2048);
    SDL_Window* window = SDL_CreateWindow(
        "Game", SDL_WINDOWPOS_CENTERED, SDL_WINDOWPOS_CENTERED,
        800, 600, SDL_WINDOW_SHOWN
    );
    SDL_Renderer* renderer = SDL_CreateRenderer(window, -1, 0);
    Mix_Music* music = Mix_LoadMUS("background.mp3");
    Mix_PlayMusic(music, -1); // Loop indefinitely
    bool running = true;
    SDL_Event event;
    while (running) {
        while (SDL_PollEvent(&event)) {
            if (event.type == SDL_QUIT) running = false;
        }
        SDL_SetRenderDrawColor(renderer, 0, 0, 0, 255);
        SDL_RenderClear(renderer);
        SDL_RenderPresent(renderer);
    }
    Mix_FreeMusic(music);
    Mix_CloseAudio();
    Mix_Quit();
    SDL_DestroyRenderer(renderer);
    SDL_DestroyWindow(window);
    SDL_Quit();
    return 0;
}
\`\`\`

Tips:
- **Mix_LoadMUS**: Loads music files like MP3.
- **Mix_PlayMusic**: Plays music with optional looping.
- Ensure audio files are in the correct format.
        `,
      },
    ],
    quiz: [
      {
        question: "Which SDL library is used for audio in C++ games?",
        options: ["SDL_image", "SDL_ttf", "SDL_mixer", "SDL_gfx"],
        answer: 2,
      },
      {
        question: "What function plays a sound effect in SDL_mixer?",
        options: [
          "Mix_PlayMusic",
          "Mix_PlayChannel",
          "Mix_LoadWAV",
          "Mix_LoadMUS",
        ],
        answer: 1,
      },
    ],
  },
  textRendering: {
    title: "C++ Text Rendering",
    description: "Learn to render text in C++ games using SDL_ttf for fonts.",
    pages: [
      {
        title: "Rendering Text",
        content: `
# Rendering Text

SDL_ttf allows rendering text using TrueType fonts.

\`\`\`cpp
#include <SDL2/SDL.h>
#include <SDL2/SDL_ttf.h>
int main(int argc, char* argv[]) {
    SDL_Init(SDL_INIT_VIDEO);
    TTF_Init();
    SDL_Window* window = SDL_CreateWindow(
        "Game", SDL_WINDOWPOS_CENTERED, SDL_WINDOWPOS_CENTERED,
        800, 600, SDL_WINDOW_SHOWN
    );
    SDL_Renderer* renderer = SDL_CreateRenderer(window, -1, 0);
    TTF_Font* font = TTF_OpenFont("font.ttf", 24);
    SDL_Color color = {255, 255, 255, 255}; // White
    SDL_Surface* surface = TTF_RenderText_Solid(font, "Hello, World!", color);
    SDL_Texture* texture = SDL_CreateTextureFromSurface(renderer, surface);
    SDL_Rect dst = {100, 100, surface->w, surface->h};
    bool running = true;
    SDL_Event event;
    while (running) {
        while (SDL_PollEvent(&event)) {
            if (event.type == SDL_QUIT) running = false;
        }
        SDL_SetRenderDrawColor(renderer, 0, 0, 0, 255);
        SDL_RenderClear(renderer);
        SDL_RenderCopy(renderer, texture, NULL, &dst);
        SDL_RenderPresent(renderer);
    }
    SDL_DestroyTexture(texture);
    SDL_FreeSurface(surface);
    TTF_CloseFont(font);
    TTF_Quit();
    SDL_DestroyRenderer(renderer);
    SDL_DestroyWindow(window);
    SDL_Quit();
    return 0;
}
\`\`\`

Key concepts:
- **TTF_Init**: Initializes SDL_ttf for font rendering.
- **TTF_OpenFont**: Loads a TrueType font file.
- **TTF_RenderText_Solid**: Renders text to a surface.
        `,
      },
      {
        title: "Dynamic Text Updates",
        content: `
# Dynamic Text Updates

Update text dynamically, such as for displaying scores.

\`\`\`cpp
#include <SDL2/SDL.h>
#include <SDL2/SDL_ttf.h>
#include <string>
int main(int argc, char* argv[]) {
    SDL_Init(SDL_INIT_VIDEO);
    TTF_Init();
    SDL_Window* window = SDL_CreateWindow(
        "Game", SDL_WINDOWPOS_CENTERED, SDL_WINDOWPOS_CENTERED,
        800, 600, SDL_WINDOW_SHOWN
    );
    SDL_Renderer* renderer = SDL_CreateRenderer(window, -1, 0);
    TTF_Font* font = TTF_OpenFont("font.ttf", 24);
    SDL_Color color = {255, 255, 255, 255};
    int score = 0;
    bool running = true;
    SDL_Event event;
    while (running) {
        while (SDL_PollEvent(&event)) {
            if (event.type == SDL_QUIT) running = false;
            if (event.type == SDL_KEYDOWN && event.key.keysym.sym == SDLK_SPACE) {
                score += 10;
            }
        }
        std::string text = "Score: " + std::to_string(score);
        SDL_Surface* surface = TTF_RenderText_Solid(font, text.c_str(), color);
        SDL_Texture* texture = SDL_CreateTextureFromSurface(renderer, surface);
        SDL_Rect dst = {100, 100, surface->w, surface->h};
        SDL_SetRenderDrawColor(renderer, 0, 0, 0, 255);
        SDL_RenderClear(renderer);
        SDL_RenderCopy(renderer, texture, NULL, &dst);
        SDL_RenderPresent(renderer);
        SDL_DestroyTexture(texture);
        SDL_FreeSurface(surface);
    }
    TTF_CloseFont(font);
    TTF_Quit();
    SDL_DestroyRenderer(renderer);
    SDL_DestroyWindow(window);
    SDL_Quit();
    return 0;
}
\`\`\`

Tips:
- **Dynamic Text**: Recreate texture for each update.
- **std::to_string**: Converts numbers to strings.
- Free surfaces and textures per frame to avoid memory leaks.
        `,
      },
    ],
    quiz: [
      {
        question: "Which SDL library is used for rendering text in C++ games?",
        options: ["SDL_image", "SDL_ttf", "SDL_mixer", "SDL_gfx"],
        answer: 1,
      },
      {
        question: "What does TTF_OpenFont do in SDL_ttf?",
        options: [
          "Renders text",
          "Loads a font file",
          "Creates a texture",
          "Initializes SDL_ttf",
        ],
        answer: 1,
      },
    ],
  },
  particleSystems: {
    title: "C++ Particle Systems",
    description:
      "Learn to create particle systems in C++ games for visual effects.",
    pages: [
      {
        title: "Basic Particle System",
        content: `
# Basic Particle System

Particle systems simulate effects like fire or explosions using many small sprites.

\`\`\`cpp
#include <SDL2/SDL.h>
#include <vector>
struct Particle {
    float x, y;
    float vx, vy;
    float lifetime;
};
class ParticleSystem {
    std::vector<Particle> particles;
public:
    void addParticle(float x, float y) {
        particles.push_back({x, y, (float)(rand() % 10 - 5), (float)(rand() % 10 - 5), 2.0f});
    }
    void update(float dt) {
        for (auto it = particles.begin(); it != particles.end();) {
            it->x += it->vx * dt;
            it->y += it->vy * dt;
            it->lifetime -= dt;
            if (it->lifetime <= 0) {
                it = particles.erase(it);
            } else {
                ++it;
            }
        }
    }
    void render(SDL_Renderer* renderer) {
        SDL_SetRenderDrawColor(renderer, 255, 255, 0, 255);
        for (const auto& p : particles) {
            SDL_Rect rect = {(int)p.x, (int)p.y, 5, 5};
            SDL_RenderFillRect(renderer, &rect);
        }
    }
};
int main(int argc, char* argv[]) {
    SDL_Init(SDL_INIT_VIDEO);
    SDL_Window* window = SDL_CreateWindow(
        "Game", SDL_WINDOWPOS_CENTERED, SDL_WINDOWPOS_CENTERED,
        800, 600, SDL_WINDOW_SHOWN
    );
    SDL_Renderer* renderer = SDL_CreateRenderer(window, -1, 0);
    ParticleSystem system;
    bool running = true;
    SDL_Event event;
    while (running) {
        while (SDL_PollEvent(&event)) {
            if (event.type == SDL_QUIT) running = false;
            if (event.type == SDL_MOUSEBUTTONDOWN) {
                system.addParticle(event.button.x, event.button.y);
            }
        }
        system.update(0.016f); // 60 FPS
        SDL_SetRenderDrawColor(renderer, 0, 0, 0, 255);
        SDL_RenderClear(renderer);
        system.render(renderer);
        SDL_RenderPresent(renderer);
        SDL_Delay(16);
    }
    SDL_DestroyRenderer(renderer);
    SDL_DestroyWindow(window);
    SDL_Quit();
    return 0;
}
\`\`\`

Key concepts:
- **Particle**: Stores position, velocity, and lifetime.
- **Update Loop**: Moves particles and removes expired ones.
- **Rendering**: Draws particles as small rectangles.
        `,
      },
      {
        title: "Advanced Particle Effects",
        content: `
# Advanced Particle Effects

Add fading and color changes for more realistic effects.

\`\`\`cpp
#include <SDL2/SDL.h>
#include <vector>
struct Particle {
    float x, y;
    float vx, vy;
    float lifetime, maxLifetime;
    uint8_t alpha;
};
class ParticleSystem {
    std::vector<Particle> particles;
public:
    void addParticle(float x, float y) {
        particles.push_back({x, y, (float)(rand() % 10 - 5), (float)(rand() % 10 - 5), 2.0f, 2.0f, 255});
    }
    void update(float dt) {
        for (auto it = particles.begin(); it != particles.end();) {
            it->x += it->vx * dt;
            it->y += it->vy * dt;
            it->lifetime -= dt;
            it->alpha = (uint8_t)(255 * (it->lifetime / it->maxLifetime));
            if (it->lifetime <= 0) {
                it = particles.erase(it);
            } else {
                ++it;
            }
        }
    }
    void render(SDL_Renderer* renderer) {
        for (const auto& p : particles) {
            SDL_SetRenderDrawColor(renderer, 255, 255, 0, p.alpha);
            SDL_Rect rect = {(int)p.x, (int)p.y, 5, 5};
            SDL_RenderFillRect(renderer, &rect);
        }
    }
};
int main(int argc, char* argv[]) {
    SDL_Init(SDL_INIT_VIDEO);
    SDL_Window* window = SDL_CreateWindow(
        "Game", SDL_WINDOWPOS_CENTERED, SDL_WINDOWPOS_CENTERED,
        800, 600, SDL_WINDOW_SHOWN
    );
    SDL_Renderer* renderer = SDL_CreateRenderer(window, -1, 0);
    ParticleSystem system;
    bool running = true;
    SDL_Event event;
    while (running) {
        while (SDL_PollEvent(&event)) {
            if (event.type == SDL_QUIT) running = false;
            if (event.type == SDL_MOUSEBUTTONDOWN) {
                system.addParticle(event.button.x, event.button.y);
            }
        }
        system.update(0.016f);
        SDL_SetRenderDrawColor(renderer, 0, 0, 0, 255);
        SDL_RenderClear(renderer);
        system.render(renderer);
        SDL_RenderPresent(renderer);
        SDL_Delay(16);
    }
    SDL_DestroyRenderer(renderer);
    SDL_DestroyWindow(window);
    SDL_Quit();
    return 0;
}
\`\`\`

Tips:
- **Alpha Blending**: Adjusts transparency for fading.
- **Dynamic Properties**: Vary color or size over time.
- Optimize by limiting the number of particles.
        `,
      },
    ],
    quiz: [
      {
        question: "What does a particle system simulate in games?",
        options: [
          "Physics collisions",
          "Visual effects",
          "Game states",
          "User input",
        ],
        answer: 1,
      },
      {
        question: "What property controls particle fading in a system?",
        options: ["Velocity", "Alpha", "Position", "Mass"],
        answer: 1,
      },
    ],
  },
  sceneManagement: {
    title: "C++ Scene Management",
    description: "Learn to manage multiple game scenes in C++ using SDL.",
    pages: [
      {
        title: "Basic Scene Management",
        content: `
# Basic Scene Management

Scene management organizes different game screens (e.g., menu, gameplay).

\`\`\`cpp
#include <SDL2/SDL.h>
#include <memory>
class Scene {
public:
    virtual void update(float dt) = 0;
    virtual void render(SDL_Renderer* renderer) = 0;
    virtual ~Scene() {}
};
class MenuScene : public Scene {
public:
    void update(float dt) override {}
    void render(SDL_Renderer* renderer) override {
        SDL_SetRenderDrawColor(renderer, 0, 0, 255, 255);
        SDL_RenderClear(renderer);
    }
};
class GameScene : public Scene {
public:
    void update(float dt) override {}
    void render(SDL_Renderer* renderer) override {
        SDL_SetRenderDrawColor(renderer, 0, 255, 0, 255);
        SDL_RenderClear(renderer);
    }
};
int main(int argc, char* argv[]) {
    SDL_Init(SDL_INIT_VIDEO);
    SDL_Window* window = SDL_CreateWindow(
        "Game", SDL_WINDOWPOS_CENTERED, SDL_WINDOWPOS_CENTERED,
        800, 600, SDL_WINDOW_SHOWN
    );
    SDL_Renderer* renderer = SDL_CreateRenderer(window, -1, 0);
    std::unique_ptr<Scene> currentScene = std::make_unique<MenuScene>();
    bool running = true;
    SDL_Event event;
    while (running) {
        while (SDL_PollEvent(&event)) {
            if (event.type == SDL_QUIT) running = false;
            if (event.type == SDL_KEYDOWN && event.key.keysym.sym == SDLK_g) {
                currentScene = std::make_unique<GameScene>();
            }
        }
        currentScene->update(0.016f);
        currentScene->render(renderer);
        SDL_RenderPresent(renderer);
        SDL_Delay(16);
    }
    SDL_DestroyRenderer(renderer);
    SDL_DestroyWindow(window);
    SDL_Quit();
    return 0;
}
\`\`\`

Key concepts:
- **Abstract Class**: Defines a common interface for scenes.
- **std::unique_ptr**: Manages scene memory safely.
- **Polymorphism**: Allows switching between scene types.
        `,
      },
      {
        title: "Scene Transitions",
        content: `
# Scene Transitions

Handle smooth transitions between scenes with state tracking.

\`\`\`cpp
#include <SDL2/SDL.h>
#include <memory>
enum class SceneType { MENU, GAME };
class Scene {
public:
    virtual void update(float dt) = 0;
    virtual void render(SDL_Renderer* renderer) = 0;
    virtual ~Scene() {}
};
class MenuScene : public Scene {
public:
    void update(float dt) override {}
    void render(SDL_Renderer* renderer) override {
        SDL_SetRenderDrawColor(renderer, 0, 0, 255, 255);
        SDL_RenderClear(renderer);
    }
};
class GameScene : public Scene {
public:
    void update(float dt) override {}
    void render(SDL_Renderer* renderer) override {
        SDL_SetRenderDrawColor(renderer, 0, 255, 0, 255);
        SDL_RenderClear(renderer);
    }
};
class SceneManager {
    std::unique_ptr<Scene> currentScene;
    SceneType currentType;
public:
    SceneManager() : currentScene(std::make_unique<MenuScene>()), currentType(SceneType::MENU) {}
    void switchScene(SceneType type) {
        if (type != currentType) {
            if (type == SceneType::MENU) {
                currentScene = std::make_unique<MenuScene>();
            } else {
                currentScene = std::make_unique<GameScene>();
            }
            currentType = type;
        }
    }
    void update(float dt) { currentScene->update(dt); }
    void render(SDL_Renderer* renderer) { currentScene->render(renderer); }
};
int main(int argc, char* argv[]) {
    SDL_Init(SDL_INIT_VIDEO);
    SDL_Window* window = SDL_CreateWindow(
        "Game", SDL_WINDOWPOS_CENTERED, SDL_WINDOWPOS_CENTERED,
        800, 600, SDL_WINDOW_SHOWN
    );
    SDL_Renderer* renderer = SDL_CreateRenderer(window, -1, 0);
    SceneManager manager;
    bool running = true;
    SDL_Event event;
    while (running) {
        while (SDL_PollEvent(&event)) {
            if (event.type == SDL_QUIT) running = false;
            if (event.type == SDL_KEYDOWN) {
                if (event.key.keysym.sym == SDLK_m) manager.switchScene(SceneType::MENU);
                if (event.key.keysym.sym == SDLK_g) manager.switchScene(SceneType::GAME);
            }
        }
        manager.update(0.016f);
        manager.render(renderer);
        SDL_RenderPresent(renderer);
        SDL_Delay(16);
    }
    SDL_DestroyRenderer(renderer);
    SDL_DestroyWindow(window);
    SDL_Quit();
    return 0;
}
\`\`\`

Tips:
- **SceneManager**: Centralizes scene switching logic.
- **Enum Class**: Tracks scene types for transitions.
- Ensure resources are cleaned up during transitions.
        `,
      },
    ],
    quiz: [
      {
        question: "What is the purpose of scene management in games?",
        options: [
          "Handling audio",
          "Organizing game screens",
          "Simulating physics",
          "Rendering sprites",
        ],
        answer: 1,
      },
      {
        question: "What C++ feature ensures safe scene memory management?",
        options: [
          "Raw pointers",
          "std::unique_ptr",
          "std::vector",
          "enum class",
        ],
        answer: 1,
      },
    ],
  },
};
