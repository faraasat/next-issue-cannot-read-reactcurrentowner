"use client"

import React, { FC, useEffect, useRef } from "react";
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";

// const animationList = [
//   "avatar-animation-break-dance.fbx",
//   "avatar-animation-break-dance-2.fbx",
//   "avatar-animation-hip-hop.fbx",
// ];

export const AvatarModel: FC<GroupProps & { selectAnimation?: number }> = ({
  selectAnimation = 0,
  ...props
}) => {
  const groupRef = useRef();
  const { nodes, materials } = useGLTF("/models/avatar.glb");

  // const { animations: avatarAnimation } = useFBX(
  //   `/models/${animationList[selectAnimation]}`
  // );

  // avatarAnimation[0].name = "avatar-animation";

  // const { actions } = useAnimations(avatarAnimation, groupRef);

  // useEffect(() => {
  //   if (actions?.["avatar-animation"])
  //     actions["avatar-animation"].reset().play();
  // }, [actions]);

  return (
    <group {...props} ref={groupRef as any} dispose={null}>
      <group rotation-x={-1}>
        <primitive object={(nodes as any).Hips} />
        <skinnedMesh
          name="EyeLeft"
          geometry={(nodes as any).EyeLeft.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={(nodes as any).EyeLeft.skeleton}
          morphTargetDictionary={(nodes as any).EyeLeft.morphTargetDictionary}
          morphTargetInfluences={(nodes as any).EyeLeft.morphTargetInfluences}
        />
        <skinnedMesh
          name="EyeRight"
          geometry={(nodes as any).EyeRight.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={(nodes as any).EyeRight.skeleton}
          morphTargetDictionary={(nodes as any).EyeRight.morphTargetDictionary}
          morphTargetInfluences={(nodes as any).EyeRight.morphTargetInfluences}
        />
        <skinnedMesh
          name="Wolf3D_Head"
          geometry={(nodes as any).Wolf3D_Head.geometry}
          material={materials.Wolf3D_Skin}
          skeleton={(nodes as any).Wolf3D_Head.skeleton}
          morphTargetDictionary={
            (nodes as any).Wolf3D_Head.morphTargetDictionary
          }
          morphTargetInfluences={
            (nodes as any).Wolf3D_Head.morphTargetInfluences
          }
        />
        <skinnedMesh
          name="Wolf3D_Teeth"
          geometry={(nodes as any).Wolf3D_Teeth.geometry}
          material={materials.Wolf3D_Teeth}
          skeleton={(nodes as any).Wolf3D_Teeth.skeleton}
          morphTargetDictionary={
            (nodes as any).Wolf3D_Teeth.morphTargetDictionary
          }
          morphTargetInfluences={
            (nodes as any).Wolf3D_Teeth.morphTargetInfluences
          }
        />
        <skinnedMesh
          geometry={(nodes as any).Wolf3D_Hair.geometry}
          material={materials.Wolf3D_Hair}
          skeleton={(nodes as any).Wolf3D_Hair.skeleton}
        />
        <skinnedMesh
          name="Wolf3D_Outfit_Top"
          geometry={(nodes as any).Wolf3D_Outfit_Top.geometry}
          material={materials.Wolf3D_Outfit_Top}
          skeleton={(nodes as any).Wolf3D_Outfit_Top.skeleton}
          morphTargetDictionary={
            (nodes as any).Wolf3D_Outfit_Top.morphTargetDictionary
          }
          morphTargetInfluences={
            (nodes as any).Wolf3D_Outfit_Top.morphTargetInfluences
          }
        />
        <skinnedMesh
          name="Wolf3D_Outfit_Bottom"
          geometry={(nodes as any).Wolf3D_Outfit_Bottom.geometry}
          material={materials.Wolf3D_Outfit_Bottom}
          skeleton={(nodes as any).Wolf3D_Outfit_Bottom.skeleton}
          morphTargetDictionary={
            (nodes as any).Wolf3D_Outfit_Bottom.morphTargetDictionary
          }
          morphTargetInfluences={
            (nodes as any).Wolf3D_Outfit_Bottom.morphTargetInfluences
          }
        />
        <skinnedMesh
          name="Wolf3D_Outfit_Footwear"
          geometry={(nodes as any).Wolf3D_Outfit_Footwear.geometry}
          material={materials.Wolf3D_Outfit_Footwear}
          skeleton={(nodes as any).Wolf3D_Outfit_Footwear.skeleton}
          morphTargetDictionary={
            (nodes as any).Wolf3D_Outfit_Footwear.morphTargetDictionary
          }
          morphTargetInfluences={
            (nodes as any).Wolf3D_Outfit_Footwear.morphTargetInfluences
          }
        />
        <skinnedMesh
          name="Wolf3D_Body"
          geometry={(nodes as any).Wolf3D_Body.geometry}
          material={materials.Wolf3D_Body}
          skeleton={(nodes as any).Wolf3D_Body.skeleton}
          morphTargetDictionary={
            (nodes as any).Wolf3D_Body.morphTargetDictionary
          }
          morphTargetInfluences={
            (nodes as any).Wolf3D_Body.morphTargetInfluences
          }
        />
      </group>
    </group>
  );
};

useGLTF.preload("/models/avatar.glb");
