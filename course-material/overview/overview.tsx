import * as React from 'react';
import styled from 'styled-components';



const TopicBlock = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 40%;
    padding: 0.2em;
    font-variant: small-caps;
    margin: 1px auto;
    &:nth-child(odd) { background: #BBF; }
    &:nth-child(even) { background: #BBF; }
`;

const TopicChildren = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 0.2em;
`;

const TopicChildBlock = styled.div`
    text-decoration-line: none;
    & a {
        text-decoration-line: none;
    }
`;

const WeekBlock = styled.div`
    width: 2em;
    height: 2em;
    border-style: inset;
    text-align: center;
    line-height: 2em;
`;

const SlideBlock = styled(TopicChildBlock)``;

const ExerciseBlock = styled(TopicChildBlock)``;

const TopicDescription = styled.div`
    display: flex;
    flex-direction: row;
    justify-contents: flex-start;
    align-items: center;
    gap: 1em;
`;

const TopicName = styled.div`
    height: 2em;
    line-height: 2em;
`;

function Topic(props : { name: string, week: number, children ?: React.ReactNode })
{
    return (
        <TopicBlock>
            <TopicDescription>
                <Week week={props.week}/>
                <TopicName>
                    {props.name}
                </TopicName>
            </TopicDescription>
            <TopicChildren>
                {props.children}
            </TopicChildren>
        </TopicBlock>
    );
}

function Slides(props : { id: string })
{
    return (
        <SlideBlock>
            <a href={props.id}>📖</a>
        </SlideBlock>
    );
}

function Exercises(props : { id: string })
{
    return (
        <ExerciseBlock>
            <a href={props.id}>🔨</a>
        </ExerciseBlock>
    );
}

function Week(props: {week : number})
{
    return (
        <WeekBlock>
            {props.week}
        </WeekBlock>
    );
}

export function Overview(props : {})
{
    return (
        <>
            {topic(1, 'C++ Introduction', true, false, 'cpp-intro')}
            {topic(1, 'Declarations', true, true)}
            {topic(1, 'Preprocessor', true, true)}
            {topic(2, 'Allocation Methods', true, false)}
            {topic(2, 'Pointers', true, true)}
            {topic(3, "Heap Allocation", true, true)}
            {topic(3, "Arrays", true, true)}
            {topic(3, "Containers", true, true)}
            {topic(4, "Const", true, false)}
            {topic(4, "Exercise on types", false, true, 'types')}
            {topic(4, "References", true, true)}
            {topic(5, "Classes (overview)", true, false)}
            {topic(5, "Constructors", true, false)}
            {topic(5, "Structs", true, false)}
            {topic(5, "sizeof", true, false)}
            {topic(5, "Const Correctness", true, false)}
            {topic(5, "Classes", false, true)}
            {topic(6, "Default Parameter Values", true, true)}
            {topic(6, "Operator Overloading", true, true)}
            {topic(6, "RAII", true, false)}
            {topic(6, "Smart Pointers", true, true)}
            {topic(7, "Inheritance", true, true)}
            {topic(7, "Templates", true, true)}
            {topic(7, "Casting", true, true)}
            {topic(8, "Performance", true, true)}
            {topic(8, "Technical Details", true, false)}
        </>
    );


    function topic(week : number, name : string, slides : boolean, exercises : boolean, id ?: string)
    {
        id = id || name.toLocaleLowerCase().replaceAll(' ', '-');

        return (
            <Topic name={name} week={week}>
                {slides ? <Slides id={id} /> : <></>}
                {exercises ? <Exercises id={id} /> : <></>}
            </Topic>
        );
    }
}
