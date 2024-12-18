import React, { useState } from 'react'
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native'

export const FussballMatchForm = () => {
  const [team1Players, setTeam1Players] = useState(['', ''])
  const [team2Players, setTeam2Players] = useState(['', ''])
  const [team1Score, setTeam1Score] = useState(0)
  const [team2Score, setTeam2Score] = useState(0)
  const [matchDate, setMatchDate] = useState(new Date())
  const [showDatePicker, setShowDatePicker] = useState(false)

  const handleSubmit = () => {
    if (
      team1Players.some((player) => !player) ||
      team2Players.some((player) => !player) ||
      // team1Score === 0 ||      team2Score === -
      isNaN(team1Score) ||
      isNaN(team2Score)
    ) {
      Alert.alert('Error', 'Please fill in all fields correctly')
      return
    }

    if (team1Score > 8 || team2Score > 8) {
      Alert.alert('Error', 'Score cannot exceed 8 points.')
      return
    }

    Alert.alert('Success', 'Match saved successfully!')
  }

  return (
    <View className="p-4 py-10">
      <View className="rounded-2xl bg-white p-4 shadow-2xl shadow-gray-900">
        <Text className="mb-4 text-center text-2xl font-bold text-gray-700">
          Fussball Match Entry
        </Text>

        {/* Team 1 */}
        <Text className="mb-2 text-lg font-semibold text-gray-600">Team 1</Text>
        {team1Players.map((player, index) => (
          <TextInput
            key={index}
            placeholder={`Player ${index + 1} Name`}
            value={player}
            onChangeText={(text) => {
              const newPlayers = [...team1Players]
              newPlayers[index] = text
              setTeam1Players(newPlayers)
            }}
            className="mb-2 rounded-md border border-gray-300 p-2"
          />
        ))}

        {/* Team 2 */}
        <Text className="mb-2 mt-4 text-lg font-semibold text-gray-600">Team 2</Text>
        {team2Players.map((player, index) => (
          <TextInput
            key={index}
            placeholder={`Player ${index + 1} Name`}
            value={player}
            onChangeText={(text) => {
              const newPlayers = [...team2Players]
              newPlayers[index] = text
              setTeam2Players(newPlayers)
            }}
            className="mb-2 rounded-md border border-gray-300 p-2"
          />
        ))}

        {/* Scores */}
        <Text className="mb-2 mt-4 text-lg font-semibold text-gray-600">Scores</Text>
        <View className="mb-4 flex-row justify-between">
          <TextInput
            placeholder="Team 1 Score"
            keyboardType="numeric"
            value={team1Score.toString()}
            onChangeText={(x) => setTeam1Score(parseInt(x))}
            className="mr-2 w-1/2 rounded-md border border-gray-300 p-2"
            maxLength={1}
          />
          <TextInput
            placeholder="Team 2 Score"
            keyboardType="numeric"
            value={team2Score.toString()}
            onChangeText={(x) => setTeam2Score(parseInt(x))}
            className="w-1/2 rounded-md border border-gray-300 p-2"
            maxLength={1}
          />
        </View>

        {/* Date Picker */}
        <Text className="mb-2 text-lg font-semibold text-gray-600">Match Date</Text>
        <TouchableOpacity
          onPress={() => setShowDatePicker(true)}
          className="mb-4 rounded-md border border-gray-300 bg-gray-200 p-3"
        >
          <Text className="text-gray-700">{matchDate.toDateString()}</Text>
        </TouchableOpacity>

        {/* Submit Button */}
        <TouchableOpacity onPress={handleSubmit} className="rounded-md bg-blue-500 py-3">
          <Text className="text-center font-semibold text-white">Save Match</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
