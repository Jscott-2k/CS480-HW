import React, { FC } from 'react';
import { Button, Header, Icon, Statistic, Image} from 'semantic-ui-react';

import '../CobSoulMusic.css';
import CobSoulMusicCommentsDark from './CobSoulMusicCommentsDark';
import CobSoulMusicFavoritesMenuDark from './CobSoulMusicFavoritesMenuDark';
import CobSoulMusicHeaderDark from './CobSoulMusicHeaderDark';
import CobSoulMusicSearchMenuDark from './CobSoulMusicSearchMenuDark';

interface CobSoulMusicItemNativeAdDarkProps {
    src:string,
    name:string,
    description:string
    adOwner:string
}

interface CobSoulMusicItemNativeAdDarkStates {

}
export default class CobSoulMusicItemNativeAdDark extends React.Component<CobSoulMusicItemNativeAdDarkProps, CobSoulMusicItemNativeAdDarkStates>{

    constructor(props: CobSoulMusicItemNativeAdDarkProps) {
        super(props);

    
    }

    render(): React.ReactNode {
        return (
            <>
                <div className={`HW4-MusicItemContainerDark HW4-Margin1`}>
                    <Header as='h3' dividing>
                        <div className='HW4-Padding-Top-1'>{this.props.name}</div>
                    </Header>
                    <div className='HW4-Bolder HW4-Margin1'>{this.props.description}</div>
                    <Button color='green' inverted> Get Now</Button>

                        <div className=' HW4-Flex HW4-FlexColumn HW4-JustifyContentCenter HW4-AlignItemsCenter HW4-Margin1'>

                        <div  className=''>
                            <Image srcSet={this.props.src} size='small'>

                            </Image>
                        </div>

                            <div className='HW4-Margin1 HW4-LowContrast HW4-LowOpacity'>
                                Advertisement by {this.props.adOwner}
                            </div>
                        </div>
                    </div>
            </>);
    }
}