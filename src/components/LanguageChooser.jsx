import React from "react";
import i18n from "i18next";
import SimpleStorage from "react-simple-storage";
import {useTranslation} from "react-i18next";

const LanguageOptions = (props) => {
    const {t} = useTranslation();
    return (
        props.availableLanguages.map((l) => {
            return (
                <option value={l} key={l}>{t(l)}</option>
            )
        })
    );
}

const getAvailableLanguagesFromConfig = () => {
    return Object.keys(i18n.options.resources);
}

class LanguageChooser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentLanguage: i18n.language,
            availableLanguages: getAvailableLanguagesFromConfig(),
        }
    }

    componentDidMount() {
        // i18n.language = this.state.currentLanguage;
        console.log('componentWillMount', this.state.currentLanguage)
        i18n.changeLanguage(this.state.currentLanguage).then();
    }

    changeLanguage = (e) => {
        i18n.changeLanguage(e.target.value).then();
        this.setState({currentLanguage: e.target.value});
    }

    render() {
        return (
            <div className={this.props.className} >
                <SimpleStorage parent={this} />
                <select style={{width: "100px" }} value={this.state.currentLanguage} onChange={(e) => this.changeLanguage(e)}>
                    <LanguageOptions availableLanguages={this.state.availableLanguages}/>
                </select>
            </div>
        )
    }
}

export default LanguageChooser;
