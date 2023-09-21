'use client';

import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconMoon, IconSun } from '@tabler/icons-react';

export function ColorSchemeToggle() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const isDarkMode = colorScheme === 'dark';

  return (
    // icon as button
    <ActionIcon variant="subtle" color={isDarkMode ? 'blue' : 'orange'} onClick={() => setColorScheme(isDarkMode ? 'light' : 'dark')}>
      {
        isDarkMode ? (<IconMoon />) : (<IconSun />)
      }
    </ActionIcon>

  );
}
