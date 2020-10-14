import { useColorMode, Switch } from "@chakra-ui/core";

export const NightModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isNight = colorMode === "dark";
  return (
    <Switch
      position="fixed"
      top="1rem"
      right="1rem"
      color="green"
      isChecked={isNight}
      onChange={toggleColorMode}
    />
  );
};
