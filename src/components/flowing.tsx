'use client'
import FlowingMenu from '../blocks/Components/FlowingMenu/FlowingMenu'

const demoItems = [
  { link: '#', text: 'Mojave', image: 'https://picsum.photos/600/400?random=1' },
  { link: '#', text: 'Sonoma', image: 'https://picsum.photos/600/400?random=2' },
  { link: '#', text: 'Monterey', image: 'https://picsum.photos/600/400?random=3' },
  { link: '#', text: 'Sequoia', image: 'https://picsum.photos/600/400?random=4' }
];

export function FlowingPreview() {
    return (
        <div style={{ height: '1000px', position: 'relative' }}>
            <FlowingMenu items={demoItems} />
        </div>
    );
}