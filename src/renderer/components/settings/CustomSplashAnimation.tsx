/*
 * Vesktop, a desktop app aiming to give you a snappier Discord Experience
 * Copyright (c) 2025 Vendicated and Vesktop contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { Button, Forms } from "@vencord/types/webpack/common";

import { SettingsComponent } from "./Settings";

export const CustomSplashAnimation: SettingsComponent = ({ settings }) => {
    return (
        <>
            <Forms.FormText>
                The animation on the splash window is loaded from{" "}
                {settings.splashAnimationPath ? (
                    <a
                        href="about:blank"
                        onClick={e => {
                            e.preventDefault();
                            VesktopNative.fileManager.showItemInFolder(settings.splashAnimationPath!);
                        }}
                    >
                        {settings.splashAnimationPath}
                    </a>
                ) : (
                    "the default location"
                )}
            </Forms.FormText>
            <div className="vcd-settings-button-grid" style={{ marginBottom: 20 }}>
                <Button
                    size={Button.Sizes.SMALL}
                    onClick={async () => {
                        const choice = await VesktopNative.fileManager.selectImagePath();
                        if (choice === "cancelled") return;
                        settings.splashAnimationPath = choice;
                    }}
                >
                    Change
                </Button>
                <Button
                    size={Button.Sizes.SMALL}
                    color={Button.Colors.RED}
                    onClick={() => (settings.splashAnimationPath = void 0)}
                >
                    Reset
                </Button>
            </div>
        </>
    );
};
