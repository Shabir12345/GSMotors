'use client';

import { useDrag, useDrop } from 'react-dnd';
import { useRef } from 'react';
import Image from 'next/image';
import { Trash2, Star, GripVertical } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Photo {
    id: string;
    url: string;
    altText?: string;
    sortOrder: number;
    isPrimary: boolean;
}

interface DraggablePhotoProps {
    photo: Photo;
    index: number;
    movePhoto: (dragIndex: number, hoverIndex: number) => void;
    onDelete: (id: string) => void;
    onSetPrimary: (id: string) => void;
}

const ItemTypes = {
    PHOTO: 'photo',
};

export default function DraggablePhoto({
    photo,
    index,
    movePhoto,
    onDelete,
    onSetPrimary,
}: DraggablePhotoProps) {
    const ref = useRef<HTMLDivElement>(null);

    const [{ handlerId }, drop] = useDrop({
        accept: ItemTypes.PHOTO,
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            };
        },
        hover(item: any, monitor) {
            if (!ref.current) return;
            const dragIndex = item.index;
            const hoverIndex = index;

            if (dragIndex === hoverIndex) return;

            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const clientOffset = monitor.getClientOffset();
            const hoverClientY = clientOffset!.y - hoverBoundingRect.top;

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;

            movePhoto(dragIndex, hoverIndex);
            item.index = hoverIndex;
        },
    });

    const [{ isDragging }, drag] = useDrag({
        type: ItemTypes.PHOTO,
        item: () => {
            return { id: photo.id, index };
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    drag(drop(ref));

    return (
        <div
            ref={ref}
            data-handler-id={handlerId}
            className={cn(
                "group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-300",
                isDragging ? "opacity-30 scale-95" : "hover:border-brand-accent/50 hover:shadow-2xl hover:shadow-brand-accent/10",
                photo.isPrimary && "ring-2 ring-brand-accent ring-offset-2 ring-offset-brand-dark"
            )}
        >
            {/* Aspect Ratio Box */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-900">
                <Image
                    src={photo.url}
                    alt={photo.altText || 'Vehicle photo'}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Primary Badge */}
                {photo.isPrimary && (
                    <div className="absolute top-3 left-3 bg-brand-accent text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg border border-white/20 animate-in fade-in zoom-in duration-300">
                        Primary
                    </div>
                )}

                {/* Drag Handle */}
                <div className="absolute top-3 right-3 p-1.5 bg-black/40 backdrop-blur-md rounded-lg opacity-0 group-hover:opacity-100 transition-opacity cursor-grab active:cursor-grabbing border border-white/10 hover:bg-black/60">
                    <GripVertical className="w-4 h-4 text-white" />
                </div>
            </div>

            {/* Actions */}
            <div className="p-4 flex gap-2">
                {!photo.isPrimary && (
                    <button
                        onClick={() => onSetPrimary(photo.id)}
                        className="flex-1 flex items-center justify-center gap-2 bg-white/5 hover:bg-brand-accent/20 text-white/70 hover:text-brand-accent px-3 py-2 rounded-xl text-xs font-bold transition-all border border-white/5 hover:border-brand-accent/20"
                        title="Set as Primary"
                    >
                        <Star className="w-3.5 h-3.5" />
                        <span>Primary</span>
                    </button>
                )}
                <button
                    onClick={() => onDelete(photo.id)}
                    className={cn(
                        "flex items-center justify-center bg-white/5 hover:bg-rose-500/20 text-white/50 hover:text-rose-500 px-3 py-2 rounded-xl text-xs font-bold transition-all border border-white/5 hover:border-rose-500/20",
                        photo.isPrimary ? "w-full" : "w-12"
                    )}
                    title="Delete Photo"
                >
                    <Trash2 className="w-4 h-4" />
                    {photo.isPrimary && <span className="ml-2">Remove Primary Photo</span>}
                </button>
            </div>

            {/* Index Badge */}
            <div className="absolute bottom-16 right-3 pointer-events-none">
                <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">
                    Position #{index + 1}
                </span>
            </div>
        </div>
    );
}
