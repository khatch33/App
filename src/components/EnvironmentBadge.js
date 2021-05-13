import React from 'react';
import {Text, View} from 'react-native';
import styles from '../styles/styles';
import CONST from '../CONST';
import Environment from '../libs/Environment';

class EnvironmentBadge extends React.Component {
    constructor() {
        super();

        this.state = {
            environment: CONST.ENVIRONMENT.PRODUCTION,
        };
    }

    componentDidMount() {
        Environment.getEnvironment()
            .then((environment) => {
                this.setState({environment});
            });
    }

    render() {
        // If we are on production, don't show any badge
        if (this.state.environment === CONST.ENVIRONMENT.PRODUCTION) {
            return null;
        }

        const backgroundColorStyle = this.state.environment === CONST.ENVIRONMENT.STAGING
            ? styles.badgeSuccess
            : styles.badgeDanger;

        return (
            <View style={[styles.badge, backgroundColorStyle, styles.ml2]}>
                <Text style={styles.badgeText}>
                    {this.state.environment}
                </Text>
            </View>
        );
    }
}

export default EnvironmentBadge;
