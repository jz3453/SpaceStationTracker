module.exports = {
    en: {
        translation: {
            POSITIVE_SOUND: `<audio src='soundbank://soundlibrary/ui/gameshow/amzn_ui_sfx_gameshow_positive_response_02'/>`,
            CALCULATING_SOUND: '<audio src="soundbank://soundlibrary/computers/screens/screens_13"/>',
            SHORT_PAUSE: '<break time="1s"/>',
            PAUSE_SPEECHCON: '<break time="2s"/>',
            WELCOME_MSG: '$t(POSITIVE_SOUND) $t(SHORT_PAUSE) Welcome to the Space Station Tracker. You can ask for the current location or the current speed of the International Space Station. Which would you like to try?',
            HELLO_MSG: ['Hello!', 'Hi'],
            HELP_MSG: 'How can I help? You can ask me about the current location of the International Space Station, or the current speed.',
            GOODBYE_MSG: ['Goodbye! ', 'See you next time!'],
            FALLBACK_MSG: `Sorry, I don't know about that. Please try again.`,
            ERROR_MSG: 'Sorry, there was an error. Please try again.',
            REFLECTOR_MSG: 'You just triggered {{intent}}'
            
        }
    }
}