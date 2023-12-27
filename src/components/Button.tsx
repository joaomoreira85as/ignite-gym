import { Button as ButtonNativeBase, IButtonProps, Text } from "native-base";

type Props = IButtonProps & {
  title: string;
  variant?: "outline" | "solid";
};
export function Button({ title, variant = "solid", ...rest }: Props) {
  const isOutlined = variant === "outline";

  return (
    <ButtonNativeBase
      w={"full"}
      h={14}
      bg={isOutlined ? "transparent" : "green.700"}
      borderWidth={variant === "outline" ? 1 : 0}
      borderColor={"green.500"}
      rounded={"sm"}
      {...rest}
      _pressed={{
        bg: isOutlined ? "gray.500" : "green.500",
      }}
    >
      <Text
        color={isOutlined ? "green.500" : "white"}
        fontFamily={"heading"}
        fontSize={"sm"}
      >
        {title}
      </Text>
    </ButtonNativeBase>
  );
}
