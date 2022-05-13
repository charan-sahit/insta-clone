import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SearchBox from '../components/search'
import SearchContent from '../components/SearchContent'

const Search = () => {
    return (
        <View>
            <SearchBox />   
            <SearchContent />
        </View>
    )
}

export default Search

const styles = StyleSheet.create({})
