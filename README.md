# Equibop (with Vesktop Window Control patch) [<img src="/static/icon.png" width="225" align="right" alt="Equibop">](https://github.com/Equicord/Equibop)

[![Equicord](https://img.shields.io/badge/Equicord-grey?style=flat)](https://github.com/Equicord/Equicord)
[![Tests](https://github.com/Equicord/Equibop/actions/workflows/test.yml/badge.svg?branch=main)](https://github.com/Equicord/Equibop/actions/workflows/test.yml)
[![Discord](https://img.shields.io/discord/1207691698386501634.svg?color=768AD4&label=Discord&logo=discord&logoColor=white)](https://discord.gg/5Xh2W87egW)

Equibop is a fork of [Vesktop](https://github.com/Vencord/Vesktop).
All credit to the Vesktop team for the window control patch. 

## Building from Source

Packaging will create builds in the dist/ folder

> [!NOTE]
> On Windows, if you run the test script, you will get test errors about venmic, you can ignore these as it's a linux only module.

```sh
git clone https://github.com/Equicord/Equibop
cd Equibop

# Install Dependencies
pnpm i

# Either run it without packaging
pnpm start

# Or package
pnpm package

# Or only build the pacman target
pnpm package --linux pacman

# Or package to a directory only
pnpm package:dir
```
