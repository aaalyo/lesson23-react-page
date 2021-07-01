import TextInput from '../Components/TextInput';
import { useState } from 'react';

function TagsPage() {
    const [value, setValue] = useState('')

    const updateValue = (value) => {
        setValue(value);
    }
    

    const tagsArray = ['Meeeeouw', 'cough', 'furball', 'into', 'food', 'bowl', 'then', 'scratch', 'owner', 'for', 'a', 'new', 'one', 'experiences', 'short', 'bursts', 'of', 'poo-phoria', 'after', 'going', 'to', 'the', 'loo', 'scratch', 'my', 'tummy', 'actually', 'i', 'hate', 'you', 'now', 'fight', 'me', 'so', 'freak', 'human', 'out', 'make', 'funny', 'noise', 'mow', 'mow', 'mow', 'mow', 'mow', 'mow', 'success', 'now', 'attack', 'human', 'yet', 'drink', 'from', 'the', 'toilet', 'but', 'sitting', 'in', 'a', 'box.', 'Show', 'belly.', 'Spit', 'up', 'on', 'light', 'gray', 'carpet', 'instead', 'of', 'adjacent', 'linoleum', 'good', 'now', 'the', 'other', 'hand,', 'too', 'check', 'cat', 'door', 'for', 'ambush', '10', 'times', 'before', 'coming', 'in'];

    let valueArray = value.split(' ');
    const tagsCloud = tagsArray.map((tag) => {
        let badgeclass = 'badge rounded-pill bg-primary m-1';
       
        for (let i = 0; i < valueArray.length; i++) {
            if (valueArray[i] === tag) {
                badgeclass = 'badge rounded-pill bg-warning m-1'
            }
        }
        return (
            <span className={badgeclass}>{tag}</span>
        )
    });

    return (
        <div>
            <div className="container">

                <div className="row mt-3">
                    <TextInput someText={valueArray.toString(', ')} updateCallback={updateValue} />

                </div>
                <div className="row m-3">
                    <div className="col">
                        {tagsCloud}
                    </div>

                </div>

            </div>

        </div>
    )
}

export default TagsPage