import { Pressable, Text } from 'react-native'

const variantStyles = {
  default: {
    background: 'bg-white',
    text: 'text-black',
  },
  primary: {
    background: 'bg-blue-600',
    text: 'text-white',
  },
}

interface Props {
  title: string
  onPress?: () => void
  disabled?: boolean
  variant?: keyof typeof variantStyles
}

export function Button({ onPress, title, disabled, variant = 'default' }: Props): JSX.Element {
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      className={`my-1 rounded-lg px-3 py-2 ${disabled ? 'bg-gray-300' : ''} ${variantStyles[variant].background} active:rounded-none active:bg-slate-500`}
    >
      <Text className={`text-lg font-bold ${variantStyles[variant].text} text-center`}>
        {title}
      </Text>
    </Pressable>
  )
}
