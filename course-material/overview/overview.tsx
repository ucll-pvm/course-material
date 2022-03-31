import * as React from 'react';
import styled from 'styled-components';



const TopicHtml = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 1em;
    padding-right: 1em;
    font-variant: small-caps;
    margin: 1px auto;
    &:nth-child(odd) { background: #BBF; }
    &:nth-child(even) { background: #BBF; }
    width: 100%;
`;

const TopicChildrenHtml = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 0.2em;
`;

const TopicChildHtml = styled.div`
    text-decoration-line: none;
    & a {
        text-decoration-line: none;
    }
`;

const SlideBlock = styled(TopicChildHtml)``;

const ExerciseBlock = styled(TopicChildHtml)``;

const TopicDescriptionHtml = styled.div`
    display: flex;
    flex-direction: row;
    justify-contents: flex-start;
    align-items: center;
`;

const TopicNameHtml = styled.div`
    height: 2em;
    line-height: 2em;
    font-size: 125%;
`;

const WeekContainerHtml = styled.div`
    display: flex;
    flex-direction: row;
    justify-contents: flex-start;
    width: 100%;
    margin: 0.2em;
`;

const WeekLabelHtml = styled.div`
    writing-mode: tb;
    text-orientation: mixed;
    transform: rotate(180deg);
    text-align: center;
    font-weight: bold;
    color: white;
    background: black;
    font-size: 125%;
    font-variant: small-caps;
    padding: 0.5em;
`;

const WeekChildrenContainerHtml = styled.div`
    display: flex;
    flex-direction: column;
    justify-contents: flex-start;
    width: 100%;
`;

const OverviewHtml = styled.div`
    margin: 1em auto;
    width: 500px;
`;

function Topic(props : { name: string, children ?: React.ReactNode })
{
    return (
        <TopicHtml>
            <TopicDescriptionHtml>
                <TopicNameHtml>
                    {props.name}
                </TopicNameHtml>
            </TopicDescriptionHtml>
            <TopicChildrenHtml>
                {props.children}
            </TopicChildrenHtml>
        </TopicHtml>
    );
}

function Slides(props : { id: string })
{
    const url = `/slides/topics/${props.id}.pdf`;

    return (
        <SlideBlock>
            <a href={url}>📖</a>
        </SlideBlock>
    );
}

function Exercises(props : { id: string })
{
    const url = `labs/${props.id}/assignment.html`;

    return (
        <ExerciseBlock>
            <a href={url}>🔨</a>
        </ExerciseBlock>
    );
}

function WeekContainer(props : { week : number, children ?: React.ReactNode })
{
    return (
        <WeekContainerHtml>
            <WeekLabelHtml>
                week {props.week}
            </WeekLabelHtml>
            <WeekChildrenContainerHtml>
                {props.children}
            </WeekChildrenContainerHtml>
        </WeekContainerHtml>
    );
}

export function Overview(props : {})
{
    return (
        <OverviewHtml>
            <WeekContainer week={1}>
                {topic('C++ Introduction', true, false, 'cpp-intro')}
                {topic('Declarations', true, true)}
                {topic('Preprocessor', true, true)}
            </WeekContainer>
            <WeekContainer week={2}>
                {topic('Allocation Methods', true, false)}
                {topic('Pointers', true, true)}
            </WeekContainer>
            <WeekContainer week={3}>
                {topic("Heap Allocation", true, true)}
                {topic("Arrays", true, true)}
                {topic("Containers", true, true)}
            </WeekContainer>
            <WeekContainer week={4}>
                {topic("Const", true, false)}
                {topic("Exercise on types", false, true, 'types')}
                {topic("References", true, true)}
            </WeekContainer>
            <WeekContainer week={5}>
                {topic("Classes (overview)", true, false, 'classes-overview')}
                {topic("Constructors", true, false)}
                {topic("Structs", true, false)}
                {topic("sizeof", true, false)}
                {topic("Const Correctness", true, false)}
                {topic("Classes", false, true)}
            </WeekContainer>
            <WeekContainer week={6}>
                {topic("Default Parameter Values", true, true)}
                {topic("Operator Overloading", true, true)}
                {topic("RAII", true, false)}
                {topic("Smart Pointers", true, true)}
            </WeekContainer>
            <WeekContainer week={7}>
                {topic("Inheritance", true, true)}
                {topic("Templates", true, true)}
                {topic("Casts", true, true)}
            </WeekContainer>
            <WeekContainer week={8}>
                {topic("Bit Manipulation", true, false)}
                {topic("Compression: Introduction", true, false, 'compression-intro')}
                {topic("Compression: Theory", true, false, 'compression-theory')}
                {topic("Compression: RLE", true, false, 'compression-rle')}
                {topic("Compression: Huffman", true, false, 'compression-huffman')}
                {topic("Compression: LZ77", true, false, 'compression-lz77')}
            </WeekContainer>
        </OverviewHtml>
    );


    function topic(name : string, slides : boolean, exercises : boolean, id ?: string)
    {
        id = id || name.toLocaleLowerCase().replaceAll(' ', '-');

        return (
            <Topic name={name}>
                {slides ? <Slides id={id} /> : <></>}
                {exercises ? <Exercises id={id} /> : <></>}
            </Topic>
        );
    }
}
