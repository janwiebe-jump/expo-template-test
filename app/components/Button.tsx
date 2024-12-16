import { Pressable, StyleProp, Text, ViewStyle } from 'react-native'

const variantStyles = {
  default: {
    background: 'bg-white',
    text: 'text-black',
  },
  primary: {
    background: 'bg-blue-500',
    text: 'text-white',
  },
}

interface Props {
  title: string
  onPress?: () => void
  disabled?: boolean
  variant?: keyof typeof variantStyles
  style?: StyleProp<ViewStyle>
}

export function Button({
  onPress,
  title,
  disabled,
  variant = 'default',
  style,
}: Props): JSX.Element {
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      className={`my-1 rounded-lg px-3 py-2 ${disabled ? 'bg-gray-300' : ''} ${variantStyles[variant].background} active:bg-slate-500`}
      style={style}
    >
      <Text className={`text-lg font-bold ${variantStyles[variant].text} text-center`}>
        {title}
      </Text>
    </Pressable>
  )
}
