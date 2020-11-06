import React from 'react';
import { withNavigation } from '@react-navigation/compat';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableWithoutFeedback, Dimensions } from 'react-native';
import { Block, Text, theme } from 'galio-framework';
import Image from 'react-native-scalable-image';

import { nowTheme } from '../constants';

class CardImage extends React.Component {
    render() {
        const {
            navigation,
            item,
            isShowTitle
        } = this.props;

        return (
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Profile')}>
                <Block style={{
                    backgroundColor: theme.COLORS.WHITE,
                    marginVertical: theme.SIZES.BASE,
                    borderWidth: 0,
                    minHeight: 114,
                    marginBottom: 4,
                    borderRadius: 5
                }}>
                    <Block flex style={styles.imageContainer}>
                        <Image width={Dimensions.get('window').width} source={{ uri: item.image[0] }} />
                    </Block>
                    {isShowTitle ? (
                        <Block flex space="between" style={styles.cardDescription}>
                            <Text
                                style={{ fontFamily: 'montserrat-regular' }}
                                size={20}
                                bold
                                style={styles.cardTitle}
                                color={nowTheme.COLORS.ACTIVE}>
                                {item.info.name}
                            </Text>
                            <Block flex>
                                <Text
                                    style={styles.subInfoCard}
                                    size={16}
                                    color={nowTheme.COLORS.DEFAULT}>
                                    Location: {item.info.location}
                                </Text>
                            </Block>
                            <Block flex>
                                <Text
                                    style={styles.subInfoCard}
                                    size={16}
                                    color={nowTheme.COLORS.DEFAULT}>
                                    Gender: {item.info.gender}
                                </Text>
                            </Block>
                            <Block flex>
                                <Text
                                    style={styles.subInfoCard}
                                    size={16}
                                    color={nowTheme.COLORS.DEFAULT}>
                                    Charge/Hour: {item.info.charge} VND
                                </Text>
                            </Block>
                        </Block>
                    ) : (<Block />)}
                </Block>
            </TouchableWithoutFeedback>
        );
    }
}

CardImage.propTypes = {
    item: PropTypes.object,
    horizontal: PropTypes.bool,
    full: PropTypes.bool,
    ctaColor: PropTypes.string,
    imageStyle: PropTypes.any,
    ctaRight: PropTypes.bool,
    titleStyle: PropTypes.any,
    textBodyStyle: PropTypes.any
};

const styles = StyleSheet.create({
    cardTitle: {
        paddingHorizontal: 9,
        paddingTop: 7,
        paddingBottom: 15
    },
    cardDescription: {
        padding: theme.SIZES.BASE / 2
    },
    imageContainer: {
        borderRadius: 5,
        elevation: 1,
        overflow: 'hidden'
    },
    subInfoCard: {
        fontFamily: 'montserrat-regular',
        paddingHorizontal: 9,
        marginBottom: 10
    }
});

export default withNavigation(CardImage);
