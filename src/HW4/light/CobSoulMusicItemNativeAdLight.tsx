import React, { FC } from 'react';
import { Button, Header, Icon, Statistic, Image} from 'semantic-ui-react';

import '../CobSoulMusic.css';
import CobSoulMusicCommentsDark from './CobSoulMusicCommentsLight';
import CobSoulMusicFavoritesMenuLight from './CobSoulMusicFavoritesMenuLight';
import CobSoulMusicHeaderLight from './CobSoulMusicHeaderLight';
import CobSoulMusicSearchMenuLight from './CobSoulMusicSearchMenuLight';

interface CobSoulMusicItemNativeAdLightProps {
    src:string,
    name:string,
    description:string
    adOwner:string
}

interface CobSoulMusicItemNativeAdLightStates {

}
export default class CobSoulMusicItemNativeAdLight extends React.Component<CobSoulMusicItemNativeAdLightProps, CobSoulMusicItemNativeAdLightStates>{

    constructor(props: CobSoulMusicItemNativeAdLightProps) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <>
                <div className={`HW4-MusicItemContainerLight HW4-Margin1`}>
                    <Header as='h3' dividing>
                        <div className='HW4-Padding-Top-1'>{this.props.name}</div>
                    </Header>
                    <div className='HW4-Bolder HW4-Margin1'>{this.props.description}</div>
                        <div className=' HW4-Flex HW4-FlexColumn HW4-JustifyContentCenter HW4-AlignItemsCenter HW4-Margin1'>

                        <div  className=''>
                            <Image srcSet={this.props.src} size='small'>

                            </Image>
                        </div>

                            <div className='HW4-Margin1 HW4-Bolder'>
                                Advertisement by {this.props.adOwner}
                            </div>
                        </div>
                    </div>
            </>);
    }
}