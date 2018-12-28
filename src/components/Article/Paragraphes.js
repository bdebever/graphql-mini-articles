import React, {
    Component
} from 'react';
import {
    DragDropContext,
    Droppable,
    Draggable
} from 'react-beautiful-dnd';
import {
    Mutation
} from 'react-apollo';
import gql from 'graphql-tag';

const UPDATE_ORDER = gql `
    mutation changeParagraphOrder($paragraphes: [String!] !) {
        changeParagraphOrder(paragraphes: $paragraphes) {
            id
        }
    }
`;

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'drag',
    padding: 8 * 2,
    margin: `0 0 8px 0`,
    border: '1px dashed #002140',

    // change background colour if dragging
   // background: isDragging ? '#3c648a66' : '',

    // styles we need to apply on draggables
    ...draggableStyle
});

export default class Paragraphes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // We sort the item as Prisma doesn't allow the nested filter yet
            paragraphes: props.paragraphes
        };
    }
    /**
     * Reorder a list
     */
    reorder = (list, startOrder, endOrder) => {
        const result = Array.from(list);
        // Find the item
        const startIndex = result.findIndex(item => item.order === startOrder);
        const endIndex = result.findIndex(item => item.order === endOrder);
        // Splice and update
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        result.forEach((item, k) => item.order = k);
        return result;
    }

    /**
     * Handle the dragging
     */
    onDragEnd = (result) => {
        // dropped outside the list or same position
        if (!result.destination ||
            result.source.index === result.destination.index) {
            return;
        }

        const items = this.reorder(
            this.state.paragraphes,
            result.source.index,
            result.destination.index
        );

        // Update the indexes
        this.setState({
            paragraphes: items
        });

        return items.map(item => item.id);
    }
    render() {
        const { paragraphes } = this.state;
        return (
            <Mutation mutation={UPDATE_ORDER}>
                {updateOrder => (
                    <DragDropContext
                        onDragEnd={(result) => {
                            const paragraphes = this.onDragEnd(result);
                            if (!paragraphes) return;
                            updateOrder({ variables: {
                                paragraphes: paragraphes
                            }})
                        }}
                    >
                        <Droppable droppableId="droppable">
                        {(provided, snapshot) => (
                            <div
                            ref={provided.innerRef}
                            >
                            {paragraphes.map((item, index) => (
                                <Draggable key={item.id} draggableId={item.id} index={item.order}>
                                {(provided, snapshot) => (
                                    <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={getItemStyle(
                                        snapshot.isDragging,
                                        provided.draggableProps.style
                                    )}
                                    >
                                    {item.content}
                                    </div>
                                )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                            </div>
                        )}
                        </Droppable>
                    </DragDropContext>
                )}
            </Mutation>
        )
    }
}